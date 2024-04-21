import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VotingPage from "./VotingPage";

function Registration() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("Nrr");
  const [lastName, setLastName] = useState("Rth");
  const [fullName, setFullName] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [voterId, setVoterId] = useState("");
  const [address, setAddress] = useState("123 xyz, MP(123654) In ");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpErrorCls, setOtpErrorCls] = useState("");
  const [linkageMessage, setLinkageMessage] = useState("");
  const [timer, setTimer] = useState(30);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [voted, setVoted] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAdharNoChange = (e) => {
    setAdharNo(e.target.value);
  };

  const handleVoterIdChange = (e) => {
    setVoterId(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    // In real implementation, this would be handled by an API
    if (adharNo === voterId) {
      setLinkageMessage("Adhar and Voter ID linked");

      setTimeout(() => {
        setIsOtpSent(true);
        setLinkageMessage("");
        setOtpError(
          `OTP Sent Successfully, on your registered mobile number end with ******${adharNo
            .toString()
            .slice(-4)}`
        );
        setOtpErrorCls("text-green-600");
      }, 1500);
    } else {
      setLinkageMessage("Adhar and Voter ID not linked");
    }
  };

  const handleVerify = () => {
    // In real implementation, this would be handled by an API
    const dummyVerified = otp === "123456"; // Dummy OTP for verification
    if (dummyVerified) {
      setIsVerified(true);
      setFullName(`${firstName} ${lastName}`);
    } else {
      setOtpErrorCls("text-red-600");
      setOtpError("OTP verification failed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleVote = () => {
    if (!voted) {
      // Simulate voting, in real implementation, this would be handled by an API
      setVoted(true);
      navigate("/voting-page");
    } else {
      alert("You have already voted.");
    }
  };

  useEffect(() => {
    let interval;
    if (isOtpSent && !isVerified) {
      interval = setInterval(() => {
        if (timer === 0) {
          clearInterval(interval);
          setIsOtpSent(false);
        } else {
          setTimer((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, isVerified, timer]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 w-2/3 h-2/3 bg-orange-300 bg-opacity-50 rounded-lg p-8 md:grid-cols-2">
        <div className="p-6 mr-2 sm:rounded-lg">
          {/* <img src="/images/VOw-GoVote.png" alt="" /> */}
          <img src="/images/VOW-voting.png" alt="" />
        </div>
        <form
          className="p-6 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          {!isVerified && !isOtpSent && !registrationSuccess && (
            <>
              <div className="flex flex-col ">
                <label htmlFor="adharNo">Adhar No</label>
                <input
                  type="text"
                  name="adharNo"
                  id="adharNo"
                  placeholder="Adhar No"
                  onChange={handleAdharNoChange}
                  value={adharNo}
                  required
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="voterId">Voter ID</label>
                <input
                  type="text"
                  name="voterId"
                  id="voterId"
                  placeholder="Voter ID"
                  onChange={handleVoterIdChange}
                  value={voterId}
                  required
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={handleSendOtp}
                className="md: bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Verify Adhar & Voter ID
              </button>
              <p className="text-green-500 text-lg  p-2">{linkageMessage}</p>
            </>
          )}
          {isOtpSent && !isVerified && !registrationSuccess ? (
            <div className="flex flex-col mt-2">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="OTP"
                onChange={handleOtpChange}
                value={otp}
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              />
              <p className={`text-lg max-w-fit p-4 ${otpErrorCls} `}>
                {otpError}
              </p>
              <p className="text-orange-700 ">Time Left: {timer}s</p>
              <button
                type="button"
                onClick={handleVerify}
                className=" bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Verify OTP
              </button>
            </div>
          ) : null}
          {isVerified && !registrationSuccess && !voted && (
            <>
              <div className="flex flex-col items-center mt-2 bg-gray-500 rounded-lg">
                <img
                  src="/images/VOW-GoVote.png"
                  alt=""
                  className="w-32 h-32 object-cover"
                />{" "}
                {/* Adjust size as needed */}
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="fullName" className="font-semibold">
                  Name:
                </label>
                <div>{fullName}</div>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="address" className="font-semibold">
                  Address:
                </label>
                <div>{address}</div>
              </div>
              <button
                type="button"
                onClick={handleVote}
                className="bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Vote
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Registration;
