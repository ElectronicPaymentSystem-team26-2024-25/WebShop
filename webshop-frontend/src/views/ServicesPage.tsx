import { ServiceCard } from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import { Service } from "@/models/ServiceModel";

const ServicesPage = () => {
  const services: Service[] = [
    {
      name: "Web Hosting",
      description: ["Reliable hosting", "24/7 support"],
      plan: "Premium",
      price: "$99.99/month",
    },
    {
      name: "Cloud Storage",
      description: ["Secure storage", "Scalable"],
      plan: "Standard",
      price: "$19.99/month",
    },
    {
      name: "SEO Optimization",
      description: ["Increase visibility", "Boost rankings"],
      plan: "Basic",
      price: "$49.99/month",
    },
  ];
  return (
    <div className="w-full  ">
      <div
        id="banner1"
        className="h-16 bg-black flex items-center justify-center"
      >
        <p className="text-white text-lg mr-4">Choose a service or </p>
        <button className="px-4 py-1 text-md font-medium text-black bg-white rounded hover:bg-gray-700 hover:font-bold hover:text-white">
          Set up a call
        </button>
      </div>{" "}
      <div
        id="banner1"
        className="h-24  flex items-center justify-center px-20"
      >
        <p className="text-black text-4xl mr-4 font-bold">Services</p>
      </div>{" "}
      <div className="w-full justify-center items-center pb-10">
        <div className="space-y-5 bg-gray-300 w-fit mx-auto p-10 rounded-md">
          <div className="flex space-x-5 mx-auto w-fit ">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard
                  name={service.name}
                  description={service.description.join(", ")}
                  price={service.price}
                  plan={""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="banner1"
        className="h-24  flex items-center justify-center px-20"
      ></div>{" "}
      <section id="contact" className=" bg-gray-200 w-full py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Set up a call</h2>
        <form className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Phone number</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
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

export default ServicesPage;
