import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ResponsiveInputShowcase() {
  return (
    <Card className="w-full max-w-[95vw] mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">50 Responsive Input Field Designs</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Text Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Text Inputs</h3>
          
          <div className="space-y-2">
            <Label htmlFor="default">Default</Label>
            <Input id="default" placeholder="Default input" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="focused">Focused</Label>
            <Input id="focused" placeholder="Focused input" className="focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" placeholder="Disabled input" disabled />
          </div>

          <div className="space-y-2">
            <Label htmlFor="error">Error</Label>
            <Input id="error" placeholder="Error input" className="border-red-500" />
            <p className="text-sm text-red-500">Error message</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="success">Success</Label>
            <Input id="success" placeholder="Success input" className="border-green-500" />
            <p className="text-sm text-green-500">Success message</p>
          </div>
        </div>

        {/* Number Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Number Inputs</h3>
          
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="number" placeholder="Enter a number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="range">Range</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
            {/* Validation States */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Validation States</h3>
          
          <div className="space-y-2">
            <Label htmlFor="warning">Warning</Label>
            <Input id="warning" placeholder="Warning input" className="border-yellow-500" />
            <p className="text-sm text-yellow-500">Warning message</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="info">Info</Label>
            <Input id="info" placeholder="Info input" className="border-blue-500" />
            <p className="text-sm text-blue-500">Info message</p>
          </div>
        </div>
        </div>

        {/* Date and Time Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Date and Time</h3>
          
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="datetime-local">DateTime-Local</Label>
            <Input id="datetime-local" type="datetime-local" />
          </div>
          <div className="space-y-4">
            <Label>Rating</Label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button key={star} type="button" variant="ghost" className="p-0 w-8 h-8">
                  <span className="text-2xl text-yellow-400">★</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Color and File Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Color and File</h3>
          
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input id="color" type="color" className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input id="file" type="file" />
          </div>
            {/* Additional Input Types */}
         <div className="">
          <h3 className="text-lg font-semibold">Additional Types</h3>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" type="url" placeholder="Enter URL" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tel">Telephone</Label>
            <Input id="tel" type="tel" placeholder="Enter phone number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input id="search" type="search" placeholder="Search..." />
          </div>
        </div>
        </div>

        {/* Checkbox and Radio */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Checkbox and Radio</h3>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>

          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Toggle and Select */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Toggle and Select</h3>
          
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Textarea */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Textarea</h3>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>
          
        </div>

       

        {/* Input Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input Sizes</h3>
          
          <div className="space-y-2">
            <Label htmlFor="small">Small</Label>
            <Input id="small" placeholder="Small input" className="h-8 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="large">Large</Label>
            <Input id="large" placeholder="Large input" className="h-12 text-lg" />
          </div>
        </div>

        {/* Input with Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Inputs with Icons</h3>
          
          <div className="space-y-2">
            <Label htmlFor="left-icon">Left Icon</Label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
              <Input id="left-icon" placeholder="Search" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="right-icon">Right Icon</Label>
            <div className="relative">
              <Input id="right-icon" placeholder="Enter email" className="pr-10" />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Input Groups */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input Groups</h3>
          
          <div className="space-y-2">
            <Label htmlFor="prefix">Input with Prefix</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                http://
              </span>
              <Input id="prefix" placeholder="example.com" className="rounded-l-none" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="suffix">Input with Suffix</Label>
            <div className="flex">
              <Input id="suffix" placeholder="0.00" className="rounded-r-none" />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                USD
              </span>
            </div>
          </div>
        </div>

        {/* Fancy Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Fancy Inputs</h3>
          
          <div className="space-y-2">
            <Label htmlFor="underlined">Underlined Input</Label>
            <Input id="underlined" placeholder="Underlined input" className="border-t-0 border-l-0 border-r-0 rounded-none px-0 border-b-2 focus:ring-0" />
          </div>

          <div className="relative">
            <Input id="animated" placeholder=" " className="peer pt-8" />
            <Label htmlFor="animated" className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500">Animated Label</Label>
          </div>
        </div>

      

        {/* Masked Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Masked Inputs</h3>
          
          <div className="space-y-2">
            <Label htmlFor="credit-card">Credit Card</Label>
            <Input id="credit-card" placeholder="0000 0000 0000 0000" className="[&::-webkit-inner-spin-button]:appearance-none" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="(000) 000-0000" className="[&::-webkit-inner-spin-button]:appearance-none" />
          </div>
        </div>

        {/* Accessibility Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Accessibility</h3>
          
          <div className="space-y-2">
            <Label htmlFor="aria-described">Input with Description</Label>
            <Input id="aria-described" aria-describedby="description" />
            <p id="description" className="text-sm text-gray-500">This is a description for the input above.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="required">Required Input</Label>
            <Input id="required" required aria-required="true" />
          </div>
        </div>

        {/* Advanced Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Advanced Inputs</h3>
          
          <div  className="space-y-2">
            <Label htmlFor="autocomplete">Autocomplete</Label>
            <Input id="autocomplete" list="fruits" placeholder="Type a fruit" />
            <datalist id="fruits">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Date" />
              <option value="Elderberry" />
            </datalist>
          </div>

          <div className="space-y-2">
            <Label htmlFor="char-count">Character Count</Label>
            <div className="relative">
              <Input id="char-count" maxLength={50} className="pr-16" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">
                <span className="character-count">0</span>/50
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Specialized Inputs</h3>
          
          <div className="space-y-2">
            <Label htmlFor="password-strength">Password with Strength Meter</Label>
            <Input id="password-strength" type="password" />
            <div className="h-2 bg-gray-200 rounded-full mt-2">
              <div className="h-full w-1/4 bg-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="otp">OTP Input</Label>
            <div className="flex space-x-2">
              <Input className="w-12 text-center" maxLength={1} />
              <Input className="w-12 text-center" maxLength={1} />
              <Input className="w-12 text-center" maxLength={1} />
              <Input className="w-12 text-center" maxLength={1} />
            </div>
          </div>
        </div>

        {/* Internationalization */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Internationalization</h3>
          
          <div className="space-y-2">
            <Label htmlFor="rtl">RTL Input</Label>
            <Input id="rtl" dir="rtl" placeholder="أدخل النص هنا" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="non-latin">Non-Latin Script</Label>
            <Input id="non-latin" placeholder="输入文本" />
          </div>
        </div>

        {/* Experimental Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Experimental</h3>
          
          <div className="space-y-2">
            <Label htmlFor="speech">Speech Recognition</Label>
            <div className="flex">
              <Input id="speech" placeholder="Speak now" className="rounded-r-none" />
              <Button type="button" className="rounded-l-none">🎤</Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="emoji">Emoji Picker</Label>
            <div className="flex">
              <Input id="emoji" placeholder="Choose an emoji" className="rounded-r-none" />
              <Button type="button" variant="outline" className="rounded-l-none">😊</Button>
            </div>
          </div>
        </div>

        {/* Input Combinations */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input Combinations</h3>
          
          <div className="space-y-2">
            <Label>Search with Filters</Label>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="posts">Posts</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-grow">
                <Input placeholder="Search..." className="pl-10 w-full" />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Date Range</Label>
            <div className="flex space-x-2">
              <Input type="date" className="w-full" />
              <span className="flex items-center">to</span>
              <Input type="date" className="w-full" />
            </div>
          </div>
        </div>

        {/* Contextual Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contextual Inputs</h3>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex">
              <Button type="button" variant="outline" className="rounded-r-none">-</Button>
              <Input id="quantity" type="number" defaultValue={1} min={1} className="rounded-none text-center w-20" />
              <Button type="button" variant="outline" className="rounded-l-none">+</Button>
            </div>
          </div>

          
        </div>

        {/* Miscellaneous */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Miscellaneous</h3>
          
          <div className="space-y-2">
            <Label htmlFor="clearable">Clearable Input</Label>
            <div className="relative">
              <Input id="clearable" placeholder="Type something..." />
              <Button type="button" variant="ghost" className="absolute inset-y-0 right-0 px-3 flex items-center">
                ✕
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="limited-textarea">Textarea with Limit</Label>
            <div className="relative">
              <Textarea id="limited-textarea" placeholder="Type your message..." maxLength={200} />
              <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                0/200
              </div>
            </div>
          </div>
        </div>
       
      </CardContent>
    </Card>
  )
}