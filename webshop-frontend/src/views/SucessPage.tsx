import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Order = {
  id: number;
  status: "SUCCESS" | "FAIL" | "ERROR" | "IN_PROGRESS" | string;
};

const SuccessPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid order ID");
      return;
    }
    axios
      .get<Order>(`https://localhost:8075/api/orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch(() => setError("Order not found"));
  }, [id]);

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

  const isSuccess = order?.status === "SUCCESS";
  const isFail = order?.status === "FAIL";
  const isError = order?.status === "ERROR";

  const title = isSuccess
    ? "Payment Successful 🎉"
    : isFail
    ? "Payment Failed"
    : isError
    ? "Payment Error"
    : "Payment Status";

  const subtitle = isSuccess
    ? "Your order has been successfully processed."
    : isFail
    ? "Your payment did not complete. You can try again from your cart or choose a different method."
    : isError
    ? "There was an error processing your payment. Please try again."
    : "Your payment is being processed. This page will update once we have the final status.";

  const panelStyle =
    isSuccess ? "bg-green-50 border-green-200" :
    isFail ? "bg-red-50 border-red-200" :
    isError ? "bg-yellow-50 border-yellow-200" :
    "bg-gray-50 border-gray-200";

  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-3/5 mt-16 items-center justify-center bg-white text-black">
        <div className={`text-center h-fit w-fit border rounded-xl p-8 ${panelStyle}`}>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{subtitle}</p>

          {order ? (
            <div className="mb-6">
              <p className="text-lg mb-2">
                Order ID: <span className="font-semibold">{order.id}</span>
              </p>
              <p className="text-lg">
                Status: <span className="font-semibold">{order.status}</span>
              </p>
            </div>
          ) : (
            <p className="text-lg">Loading...</p>
          )}

          <div className="flex gap-3 justify-center">
            <a
              href="/services"
              className="px-6 py-2 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-700"
            >
              Back to Services
            </a>
            {!isSuccess && (
              <a
                href="/cart"
                className="px-6 py-2 text-lg font-semibold text-black bg-white border rounded-lg hover:bg-gray-100"
              >
                Try Again
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <footer className="bg-black h-full items-center text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 My Website</p>
            <ul className="flex justify-center space-x-4 mt-2">
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SuccessPage;
