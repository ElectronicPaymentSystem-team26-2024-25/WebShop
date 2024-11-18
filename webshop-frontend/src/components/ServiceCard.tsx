import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the prop types
interface ServiceCardProps {
  name: string | null;
  description: string[] | null;
  price: string | null;
  plan: string | null;
}
export function ServiceCard({
  name,
  description,
  price,
  plan,
}: ServiceCardProps) {
  return (
    <Card className="w-[350px] max-w-60 min-h-full">
      <CardHeader className="flex-1 flex">
        <CardTitle className="items-center w-full text-center text-xl">
          {name}
        </CardTitle>
        <div className="items-center text-left ml-6">
          {description && description.length > 0 ? (
            description.map((pro, index) => (
              <CardDescription key={index}>*{pro}</CardDescription>
            ))
          ) : (
            <CardDescription>No description available</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Billing options</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">One year (One time)</SelectItem>
                  <SelectItem value="sveltekit">
                    Yearly (Subscription)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
              <Input id="name" value={price || "N/A"} disabled />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Start now</Button>
      </CardFooter>
    </Card>
  );
}
