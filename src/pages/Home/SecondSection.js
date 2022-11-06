import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../assets/home_img1.png';

function SecondSection() {
  return (
    <section className="bg-gray-50">
      <div className="grid max-w-screen-xxl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 lg:col-span-7 lg:flex px-10">
          <img
            className="h-full shadow rounded-lg"
            src={homeImg}
            alt="Home img"
          />
        </div>
        <div className="mr-auto place-self-center lg:col-span-5">
          <h2 className="mb-6 text-3xl font-bold leading-10 text-gray-800 md:text-4xl xl:text-5xl dark:text-white">
            Amet minim mollit non deserunt
          </h2>
          <p className="mb-6 text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit off...
          </p>
          <Link
            to="/goals"
            class="inline-flex items-center justify-center w-28 h-10 px-4 py-2 bg-white border rounded-xl border-gray-500 text-gray-800 text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
