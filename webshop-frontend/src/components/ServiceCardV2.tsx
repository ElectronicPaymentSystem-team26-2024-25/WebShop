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
  onCtaClick: (selectedOption: BillingOption) => void;
}

export default function ServiceOfferCard({
  title = "Premium Plan",
  description = [
    "Access to all premium features",
    "24/7 customer support",
    "Unlimited storage",
  ],
  billingOptions = [
    { id: "once", label: "One time", price: 29 },
    { id: "annually", label: "Annually", price: 290 },
  ],
  ctaText = "Get Started",
  onCtaClick = () => {},
}: ServiceOfferCardProps) {
  const [selectedBilling, setSelectedBilling] = useState<string>(
    billingOptions[0].id
  );

  const handleCtaClick = () => {
    const selectedOption = billingOptions.find(
      (option) => option.id === selectedBilling
    );
    if (selectedOption) {
      onCtaClick(selectedOption);
    }
  };

  return (
    <Card className="w-full max-w-60 mx-auto">
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
          className="flex flex-col space-y-2"
        >
          {billingOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-grow">
                {option.label}
              </Label>
              <span className="font-bold">${option.price}</span>
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
