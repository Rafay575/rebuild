import React from "react";

export default function ContactSection2() {
  return (
    <section className="bg-blue-600 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left column: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* If using Next.js, replace with:
              <Image src="/images/man-tablet.png" alt="Man with tablet" width={400} height={400} />
           */}
          <img
            src="/images/men.png"
            alt="Man with tablet"
            className="max-w-full h-auto mt-[-100px]"
          />
        </div>

        {/* Right column: Form */}
        <div className="w-full md:w-1/2 md:pl-10">
          {/* Subheading */}
          <p className="text-sm uppercase tracking-wider text-white mb-2">
            TALK TO US
          </p>
          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            How May We Help You!
          </h2>

          <form className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="col-span-1">
  <label className="block text-white text-sm font-medium mb-1">
    Your Name*
  </label>
  <input
    type="text"
    placeholder="Your name"
    className="w-full p-3 rounded-md bg-transparent !text-white border-white border focus:outline-none focus:ring-2 focus:ring-blue-300"
  />
</div>


            {/* Email Field */}
            <div  className="col-span-1">
              <label className="block text-white text-sm font-medium mb-1">
                Your Email*
              </label>
              <input
                type="email"
                placeholder="info@example.com"
                 className="w-full p-3 rounded-md bg-transparent !text-white border-white border focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Message Field */}
            <div className="col-span-2">
              <label className="block text-white text-sm font-medium mb-1">
                Message*
              </label>
              <textarea
                placeholder="Write Message"
                rows={4}
              className="w-full p-3 rounded-md bg-transparent !text-white border-white border focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-gray-900 font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
