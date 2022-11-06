import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/home_img.png';

function IntroSection() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-0">
        <div className="grid max-w-screen-xxl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-6 text-4xl font-bold leading-10 text-gray-800 md:text-5xl xl:text-6xl dark:text-white">A financial plan for anyone, any situation.</h1>
            <p className="mb-6 text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">
              Answer a few questions to get a step-by-step guide to help manage your money.
            </p>
            <Link to="/goals" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={img} alt="hero_image" />
          </div>
        </div>
      </section>
    </>

  );
}

export default IntroSection;
