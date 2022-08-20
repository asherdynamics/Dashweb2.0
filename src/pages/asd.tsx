import React from 'react';

export default function contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex items-center min-h-screen bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto my-10 bg-white p-5 rounded shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700">
                  Contact Us
                </h1>
                <p className="text-gray-400 dark:text-gray-400">
                  Fill out the form below to send us a message. We will get in
                  touch with you as soon as possible
                </p>
              </div>
              <div className="m-7">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="f2728573-f88b-4597-b67f-86a2fd55fee2"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="🌟ASD Lead DashmileUSA Website🌟"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://dashmileusa.com/success"
                  />
                  <div className="flex mb-6 space-x-4">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="cname"
                        className="block mb-2 text-sm text-gray-600 "
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="Company Name"
                        id="company_name"
                        placeholder="DashmileUSA"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="Email"
                        id="email"
                        placeholder="info@DashmileUSA.com"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                  </div>{' '}
                  <div className="flex mb-6 space-x-4">
                    <div className="w-full">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 text-gray-600"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="Address"
                        id="address"
                        placeholder=" 3150 Paradise Rd."
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                      />
                    </div>
                  </div>
                  <div className="flex mb-6 space-x-4">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="city"
                        className="block text-sm mb-2 text-gray-600"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="City"
                        id="city"
                        placeholder="Las Vegas"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm text-gray-600 "
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="State"
                        id="state"
                        placeholder="NV"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="zip"
                        className="block mb-2 text-sm text-gray-600 "
                      >
                        Zip
                      </label>
                      <input
                        type="text"
                        name="Zip"
                        id="zip"
                        placeholder="89109"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                  </div>
                  <div className="flex mb-6 space-x-4">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="phone"
                        className="block text-sm mb-2 text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="mobile"
                        className="block mb-2 text-sm text-gray-600 "
                      >
                        Mobile
                      </label>
                      <input
                        type="text"
                        name="Mobile"
                        id="mobile"
                        placeholder="+1 (555) 123-4567"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
