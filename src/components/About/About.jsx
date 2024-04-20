import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="/images/VOW-about.png" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Vote Online: Empowering Voices Through Digital Expression
            </h2>
            <p className="mt-6 text-gray-600">
              In today's digital age, voting online has become an essential tool
              for empowering voices and shaping our future. With the power of
              technology, passionate individuals can now engage in the
              democratic process from the comfort of their own homes.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
              mollitia.
            </p>
            <div className="mt-4">
              
              <span className="ml-2 text-gray-600">
                Cast your vote online Now..!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
