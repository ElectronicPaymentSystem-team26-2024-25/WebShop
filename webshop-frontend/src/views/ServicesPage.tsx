import ServiceOfferCard from "@/components/ServiceCardV2";
import { Service } from "@/models/ServiceModel";

const ServicesPage = () => {
  const services: Service[] = [
    {
      name: "Unlimited Talk & Text",
      description: [
        "Unlimited nationwide calls and texts",
        "Voicemail and call forwarding included",
      ],
      plan: "Basic",
      billingOptions: [
        { id: "annually", label: "Annually (auto-renew)", price: 290.0 },
        { id: "1yr", label: "One Year (fixed-term)", price: 320.0 },
      ],
    },
    {
      name: "High-Speed Internet",
      description: [
        "Fiber connection with up to 1 Gbps speeds",
        "No data caps or throttling",
      ],
      plan: "Premium",
      billingOptions: [
        { id: "annually", label: "Annually (auto-renew)", price: 790.0 },
        { id: "1yr", label: "One Year (fixed-term)", price: 850.0 },
      ],
    },
    {
      name: "International Calling",
      description: [
        "Low rates to over 100 countries",
        "Crystal-clear voice quality",
      ],
      plan: "Standard",
      billingOptions: [
        { id: "annually", label: "Annually (auto-renew)", price: 99.0 },
        { id: "1yr", label: "One Year (fixed-term)", price: 120.0 },
      ],
    },
    {
      name: "Mobile Data Plan",
      description: ["Unlimited 5G data", "Hotspot capability included"],
      plan: "Unlimited",
      billingOptions: [
        { id: "annually", label: "Annually (auto-renew)", price: 599.0 },
        { id: "1yr", label: "One Year (fixed-term)", price: 650.0 },
      ],
    },
    {
      name: "Home Phone",
      description: [
        "Unlimited local and long-distance calls",
        "Caller ID and call waiting included",
      ],
      plan: "Essential",
      billingOptions: [
        { id: "annually", label: "Annually (auto-renew)", price: 199.0 },
        { id: "1yr", label: "One Year (fixed-term)", price: 220.0 },
      ],
    },
  ];

  const handleCtaClick = (selectedOption: any) => {
    console.log("Selected option:", selectedOption);
    // Add functionality for subscription logic
  };

  return (
    <div className="w-full">
      <div
        id="banner1"
        className="h-16 bg-black flex items-center justify-center"
      >
        <p className="text-white text-lg mr-4">Choose a service or </p>
        <button className="px-4 py-1 text-md font-medium text-black bg-white rounded hover:bg-gray-700 hover:text-white">
          Set up a call
        </button>
      </div>
      <div className="h-24 flex items-center justify-center px-20">
        <p className="text-black text-4xl mr-4 font-bold">Our Services</p>
      </div>
      <div className="w-full flex justify-center items-center pb-10">
        <div className="space-y-5 bg-gray-100 w-fit mx-auto p-10 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceOfferCard
                key={index}
                title={service.name}
                description={service.description}
                billingOptions={service.billingOptions}
                ctaText="Subscribe Now"
              />
            ))}
          </div>
        </div>
      </div>
      <section id="contact" className="bg-gray-200 w-full py-10">
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
              type="text"
              name="phone"
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
          <p>&copy; 2024 Telecom Web Shop</p>
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
