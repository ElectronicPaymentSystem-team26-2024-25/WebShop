import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axiosClient from "@/axios-client";
import { useStateContext } from "@/contexts/ContextProvider";
import axios from "axios";

interface BillingOption {
  id: string;
  label: string;
  price: number;
}

interface ServiceOfferCardProps {
  title: string;
  description: string[];
  billingOptions: BillingOption[];
  ctaText: string;
}

export default function ServiceOfferCard({
  title = "Telecom Service Plan",
  description = [
    "Unlimited nationwide calls",
    "Fast fiber internet",
    "Free installation and 24/7 support",
  ],
  billingOptions = [
    { id: "monthly", label: "Monthly Subscription", price: 29.99 },
    { id: "annually", label: "Annual Subscription", price: 299.99 },
  ],
  ctaText = "Subscribe Now",
}: ServiceOfferCardProps) {
  const [selectedBilling, setSelectedBilling] = useState<string>(
    billingOptions[0].id
  );
  const { userId } = useStateContext();
  // Create order based on the selected billing option
  const createOrder = async () => {
    // Find the selected billing option
    const selectedOption = billingOptions.find(
      (option) => option.id === selectedBilling
    );

    if (!selectedOption) {
      console.error("Selected billing option not found.");
      return;
    }

    // Construct the order data dynamically
    const orderData = {
      orderNumber: `ORD${Math.floor(Math.random() * 100000)}`,
      totalAmount: selectedOption.price,
      currency: "USD", // Adjust if needed
      status: "PENDING",
      user: {
        id: userId,
      },
    };

    try {
      const response = await axios.post(
        "https://localhost:8075/api/orders",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const paymentResponse = response.data; // Assuming the payment response contains the URL
      if (paymentResponse.url) {
        // Calculate the position to center the popup on the screen
        const width = 800;
        const height = 600;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        // Open the payment URL in a centered popup window
        window.open(
          paymentResponse.url,
          "_blank",
          `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
        );
      } else {
        console.error("Payment URL not found in response.");
      }
      console.log("Order created successfully:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleCtaClick = () => {
    createOrder();
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription>
          <ul className="mt-2 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedBilling}
          onValueChange={setSelectedBilling}
          className="flex flex-col space-y-3"
        >
          {billingOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-grow">
                {option.label}
              </Label>
              <span className="font-bold">{formatPrice(option.price)}</span>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button onClick={handleCtaClick} className="w-full">
          {ctaText}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
