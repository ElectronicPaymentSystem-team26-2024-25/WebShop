import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <div
        id="hero"
        className="md:h-full h-1/4 bg-cover bg-center text-white flex items-center justify-center p-8"
        style={{ backgroundImage: 'url("/login-bg.avif")' }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Reliable Internet, Anytime, Anywhere
          </h1>
          <p className="text-lg mb-4">
            Experience fast and stable internet with our top-tier service.
            Perfect for streaming, gaming, and working from home.
          </p>
          <p className="text-sm">
            Join us today for seamless connectivity and exceptional support.
          </p>
          <button
            className="ml-4 mt-4 px-4 py-2 text-lg font-medium text-black bg-white rounded hover:bg-gray-700 hover:font-bold hover:text-white"
            onClick={() => navigate("/services")}
          >
            Get started
          </button>
        </div>
      </div>
      <div
        id="banner1"
        className="h-24 bg-black flex items-center justify-center"
      >
        <p className="text-white text-lg mr-4">
          Ready to experience top-notch connectivity?
        </p>
        <button
          className="px-4 py-2 text-lg font-medium text-black bg-white rounded hover:bg-gray-700 hover:font-bold hover:text-white"
          onClick={() => navigate("/services")}
        >
          Sign Up Now
        </button>
      </div>{" "}
      <section id="features" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <ul className="flex flex-wrap justify-center space-x-6">
          <li className="max-w-xs p-4 text-center bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Ultra-Fast Speeds</h3>
            <p className="text-gray-700">
              Enjoy lightning-fast internet speeds that keep up with your
              streaming, gaming, and browsing needs without any interruptions.
            </p>
          </li>
          <li className="max-w-xs p-4 text-center bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Reliable Connectivity
            </h3>
            <p className="text-gray-700">
              Our network ensures stable connections, so you can work from home,
              video chat, and stream seamlessly at any time.
            </p>
          </li>
          <li className="max-w-xs p-4 text-center bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-700">
              Our dedicated support team is available around the clock to help
              you with any issues or questions you may have.
            </p>
          </li>
        </ul>
      </section>
      <section id="testimonials" className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="text-center">
              <p className="italic">"This company is amazing!"</p>
              <footer>- Customer A</footer>
            </blockquote>
            <blockquote className="text-center">
              <p className="italic">"Highly recommend their services."</p>
              <footer>- Customer B</footer>
            </blockquote>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Website</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <a href="https://facebook.com" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
