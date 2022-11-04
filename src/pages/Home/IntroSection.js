import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/home_img.png';
import homeImg from '../../assets/home_img1.png';

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

      <section className="bg-gray-50">
        <div className="grid max-w-screen-xxl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mt-0 lg:col-span-7 lg:flex px-10">
            <img className="h-full shadow rounded-lg" src={homeImg} alt="Home img" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-5">
            <h2 className="mb-6 text-3xl font-bold leading-10 text-gray-800 md:text-4xl xl:text-5xl dark:text-white">
              Amet minim mollit non deserunt
            </h2>
            <p className="mb-6 text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit off...
            </p>
            <Link to="/goals" class="inline-flex items-center justify-center w-28 h-10 px-4 py-2 bg-white border rounded-xl border-gray-500 text-gray-800 text-sm">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="">
          <h1 className="text-3xl font-bold leading-loose text-gray-800 text-center">Amet minim mollit non deserunt</h1>
          <div className="grid grid-cols-2 gap-4 place-items-center px-5 py-5">
            <div className="">
              <img className="w-72 h-44 rounded-lg" src="https://via.placeholder.com/300x175" alt="img1" />
              <p className="w-full text-sm font-medium leading-tight text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <div className="">
              <img className="w-72 h-44 rounded-lg" src="https://via.placeholder.com/300x175" alt="img2" />
              <p className="w-full text-sm font-medium leading-tight text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <div className="">
              <img className="w-72 h-44 rounded-lg" src="https://via.placeholder.com/300x175" alt="img3" />
              <p className="w-full text-sm font-medium leading-tight text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <div className="">
              <img className="w-72 h-44 rounded-lg" src="https://via.placeholder.com/300x175" alt="img4" />
              <p className="w-full text-sm font-medium leading-tight text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default IntroSection;
