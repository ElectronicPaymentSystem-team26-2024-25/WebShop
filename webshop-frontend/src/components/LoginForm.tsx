"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "@/models/UserModel";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useStateContext } from "@/contexts/ContextProvider";

export default function Component() {
  const [activeTab, setActiveTab] = useState("login");
  const { toast } = useToast();
  const { setToken } = useStateContext();
  const [registerData, setRegisterData] = useState<User>({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const registerUser = async (userData: User): Promise<User> => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8080/api/register",
        userData
      );
      console.log("User registered successfully:", response.data);
      return response.data;
    } catch (error: any) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const loginUser = async (userData: {
    email: string;
    password: string;
  }): Promise<User> => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8080/api/login",
        userData
      );
      setToken(response.data.username);
      console.log("User logined successfully:", response.data);
      return response.data;
    } catch (error: any) {
      console.error(
        "Error  user:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const handleRegisterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerUser(registerData);

      setActiveTab("login");
      toast({
        title: "Registration Successful",
        description:
          "Your account has been created. Please log in to continue.",
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    try {
      await loginUser(loginData);
    } catch (error) {
      toast({
        title: "Login failed",
      });
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center md:h-screen h-2/3 md:w-2/5 w-full">
      <Card className="w-full max-w-md mx-2 my-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome
          </CardTitle>
          <CardDescription className="text-center">
            <u>Log in</u> or <u>register an account</u> to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={loginData.email}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="John Doe"
                    required
                    value={registerData.username}
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={registerData.email}
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={registerData.password}
                    onChange={handleRegisterChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
