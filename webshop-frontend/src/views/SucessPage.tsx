import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Order type
type Order = {
  id: number;
  status: string;
};

const SuccessPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract 'id' from URL as string
  const [order, setOrder] = useState<Order | null>(null); // State for order data
  const [error, setError] = useState<string | null>(null); // State for error message

  useEffect(() => {
    if (!id) {
      setError("Invalid order ID");
      return;
    }

    // Fetch order data by ID
    axios
      .get<Order>(`http://localhost:8075/api/orders/${id}`)
      .then((response) => {
        setOrder(response.data);
        console.log(response.data);
      })
      .catch(() => setError("Order not found"));
  }, [id]);

  // Render error message if any
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );
  }

  // Render success page
  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-3/5 mt-16 items-center justify-center bg-white text-black">
        <div className="text-center h-fit w-fit bg-white">
          <h1 className="text-4xl font-bold mb-6">Congratulations!</h1>
          <p className="text-xl mb-4">
            Your order has been successfully processed. We appreciate your trust
            and are excited to serve you!
          </p>
          {order ? (
            <div>
              <p className="text-lg mb-2">
                Order ID: <span className="font-semibold">{order.id}</span>
              </p>
              <p className="text-lg mb-6">
                Status: <span className="font-semibold">{order.status}</span>
              </p>
              <p className="text-lg mb-4">
                Your order is being prepared, and you will receive updates soon.
                Thank you for choosing us!
              </p>
            </div>
          ) : (
            <p className="text-lg">Loading...</p>
          )}
          <a
            href="/services"
            className="mt-6 inline-block px-6 py-2 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-500"
          >
            Back to Services
          </a>
        </div>
      </div>
      <div className="flex-1">
        <footer className="bg-black h-full items-center text-white py-4">
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
    </div>
  );
};

export default SuccessPage;
