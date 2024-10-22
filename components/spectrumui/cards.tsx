/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  Users,
} from "lucide-react";

export function LoginCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}

export function SignUpCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Choose a password"
                type="password"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="terms" />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Account</Button>
      </CardFooter>
    </Card>
  );
}

export function PaymentCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>
          Enter your payment information to complete the purchase.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="Enter name on card" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="Enter card number" />
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Pay Now</Button>
      </CardFooter>
    </Card>
  );
}

export function ProfileCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="./avtar.png" alt="@arihantcodes" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Spectrum UI</CardTitle>
            <CardDescription>@arihantcodes</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Email</Label>
            <p className="text-sm">hello@arihant.us</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Location</Label>
            <p className="text-sm">San Francisco, CA</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Bio</Label>
            <p className="text-sm">
              Software developer passionate about creating user-friendly
              applications.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
export function SettingsCard() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Manage your account settings and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="space-y-4 py-2 ">
              <div className="space-y-2 mt-5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div className="space-y-4 py-2">
              <div className="flex items-center space-x-2">
                <Switch id="emailNotifications" />
                <Label htmlFor="emailNotifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="pushNotifications" />
                <Label htmlFor="pushNotifications">Push Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="weeklyDigest" />
                <Label htmlFor="weeklyDigest">Weekly Digest</Label>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}

export function MetricsCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Metrics Overview</CardTitle>
        <CardDescription>Your key performance indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <Users className="mr-4 h-4 w-4 text-muted-foreground" />
            <div className="space-y-1 flex-1">
              <p className="text-sm font-medium leading-none">Total Users</p>
              <p className="text-2xl font-bold">2,543</p>
            </div>
            <Badge variant="secondary">+12%</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div>Revenue</div>
              <div className="font-medium">$45,231.89</div>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Conversion Rate
              </span>
            </div>
            <div className="text-2xl font-bold">3.8%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SubscriptionCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>You are currently on the Pro plan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">$29.99</span>
            <Badge>Monthly</Badge>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
              Unlimited projects
            </li>
            <li className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              Unlimited team members
            </li>
            <li className="flex items-center">
              <Download className="mr-2 h-4 w-4 text-muted-foreground" />
              5TB storage
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade Plan</Button>
      </CardFooter>
    </Card>
  );
}

export function TaskCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Current Tasks</CardTitle>
        <CardDescription>Your team's ongoing tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {["Design system update", "API integration", "User testing"].map(
            (task, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" id={`task-${index}`} className="mr-2" />
                <label htmlFor={`task-${index}`} className="flex-1">
                  {task}
                </label>
                <Badge
                  variant={
                    index === 0
                      ? "default"
                      : index === 1
                      ? "secondary"
                      : "outline"
                  }
                >
                  {index === 0
                    ? "In Progress"
                    : index === 1
                    ? "Pending"
                    : "Completed"}
                </Badge>
              </div>
            )
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Tasks
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CalendarCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Your schedule for the next 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { date: "Today", event: "Team standup", time: "10:00 AM" },
            { date: "Tomorrow", event: "Client meeting", time: "2:00 PM" },
            {
              date: "Fri, Jun 12",
              event: "Project deadline",
              time: "11:59 PM",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.event}</p>
                <p className="text-xs text-muted-foreground">
                  {item.date} at {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Full Calendar
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BillingCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Billing Information</CardTitle>
        <CardDescription>
          Manage your billing details and payment method
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium">Visa ending in 4242</p>
              <p className="text-xs text-muted-foreground">Expires 12/2024</p>
            </div>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billingEmail">Billing Email</Label>
            <Input id="billingEmail" value="johndoe@example.com" readOnly />
          </div>
          <div className="space-y-2">
            <Label>Next Payment</Label>
            <div className="flex justify-between items-center">
              <span>$29.99 due on June 1, 2023</span>
              <Badge>Upcoming</Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Update Payment Method</Button>
      </CardFooter>
    </Card>
  );
}

export function FeedbackCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
        <CardDescription>Help us improve our product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>How satisfied are you with our product?</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Your feedback</Label>
            <textarea
              id="feedback"
              className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell us what you think..."
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit Feedback</Button>
      </CardFooter>
    </Card>
  );
}

export default function CardCollection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 grid-cols-1 ml-6 ">
      <LoginCard />
      <SignUpCard />
      <PaymentCard />
      <ProfileCard />
      <SettingsCard />
      <MetricsCard />
      <SubscriptionCard />
      <TaskCard />
      <CalendarCard />
      <BillingCard />
      <FeedbackCard />
    </div>
  );
}
