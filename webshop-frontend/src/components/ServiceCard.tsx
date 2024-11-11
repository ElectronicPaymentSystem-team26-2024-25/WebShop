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
  description: string | null;
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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="items-center w-full text-center text-xl">
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
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
                  <SelectItem value="next">One time (One month)</SelectItem>
                  <SelectItem value="sveltekit">Monthly</SelectItem>
                  <SelectItem value="astro">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
              <Input id="name" value={price!} disabled />
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
