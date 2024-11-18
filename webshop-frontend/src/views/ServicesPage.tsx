import ServiceOfferCard from "@/components/ServiceCardV2";
import { Service } from "@/models/ServiceModel";

const ServicesPage = () => {
  const services: Service[] = [
    {
      name: "Unlimited Talk & Text",
      description: [
        "Unlimited calls and texts nationwide",
        "Voicemail and call forwarding included",
      ],
      plan: "Basic",
      billingOptions: [
        { id: "once", label: "One time", price: 29 },
        { id: "monthly", label: "Monthly", price: 29.99 },
        { id: "annually", label: "Annually", price: 290 },
      ],
    },
    {
      name: "High-Speed Internet",
      description: [
        "Fiber connection",
        "No data caps",
        "Up to 1 Gbps download speed",
      ],
      plan: "Premium",
      billingOptions: [
        { id: "once", label: "One time", price: 79 },
        { id: "monthly", label: "Monthly", price: 79.99 },
        { id: "annually", label: "Annually", price: 799 },
      ],
    },
    {
      name: "International Calling",
      description: [
        "Low-cost rates to over 100 countries",
        "Crystal-clear voice quality",
      ],
      plan: "Standard",
      billingOptions: [
        { id: "once", label: "One time", price: 9 },
        { id: "monthly", label: "Monthly", price: 9.99 },
        { id: "annually", label: "Annually", price: 99 },
      ],
    },
    {
      name: "Mobile Data Plan",
      description: ["5G coverage", "Unlimited data", "Hotspot capability"],
      plan: "Unlimited",
      billingOptions: [
        { id: "once", label: "One time", price: 59 },
        { id: "monthly", label: "Monthly", price: 59.99 },
        { id: "annually", label: "Annually", price: 599 },
      ],
    },
    {
      name: "Home Phone",
      description: [
        "Unlimited local and long-distance calls",
        "Caller ID and Call Waiting included",
      ],
      plan: "Essential",
      billingOptions: [
        { id: "once", label: "One time", price: 19 },
        { id: "monthly", label: "Monthly", price: 19.99 },
        { id: "annually", label: "Annually", price: 199 },
      ],
    },
  ];
  const handleCtaClick = (selectedOption: any) => {
    console.log("Selected option:", selectedOption);
    //
  };
  return (
    <div className="w-full  ">
      <div
        id="banner1"
        className="h-16 bg-black flex items-center justify-center"
      >
        <p className="text-white text-lg mr-4">Choose a service or </p>
        <button className="px-4 py-1 text-md font-medium text-black bg-white rounded hover:bg-gray-700  hover:text-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <ServiceOfferCard
                  key={index}
                  title={service.name}
                  description={service.description}
                  billingOptions={service.billingOptions}
                  ctaText="Subscribe Now"
                  onCtaClick={handleCtaClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="banner1"
        className="h-24  flex items-center justify-center px-20"
      ></div>{" "}
      <section id="contact" className=" bg-gray-200 w-full py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Not sure? <strong>Set up a call</strong>
        </h2>
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
