"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ProfileInfo {
  name: string;
  title: string;
  image: string;
}

interface PhotographerFaqProps {
  heading?: string;
  profileInfo?: ProfileInfo;
  contactSection?: {
    title: string;
    description: string;
    linkText: string;
  };
  items?: FaqItem[];
  showBottomButtons?: boolean;
}

const Faq17 = ({
  heading = "Any questions?",
  profileInfo = {
    name: "Samuel Spenser",
    title: "Professional Photographer",
    image: "/images/block/avatar-1.webp",
  },
  contactSection = {
    title: "Didn't find your answer?",
    description:
      "No worries! If you have any other questions or need more information, feel free to reach out directly. I'm always happy to help and make sure you feel confident before booking your session. Let's chat!",
    linkText: "Ask me a question",
  },
  items = [
    {
      question: "How far in advance should I book?",
      answer:
        "To ensure availability, it's ideal to book 3-6 months in advance, especially during peak seasons like weddings or holiday events. However, if your date is flexible, feel free to inquire anytime—I'll do my best to accommodate last-minute requests.",
    },
    {
      question: "What's your turnaround time?",
      answer:
        "My typical turnaround time is 2-3 weeks for standard sessions and 4-6 weeks for weddings and larger events. Rush delivery options are available for an additional fee if you need your photos sooner.",
    },
    {
      question: "How long will it take to receive my photos?",
      answer:
        "You can expect to receive your edited photos within 2-3 weeks after your session. For weddings and special events, the timeline may extend to 4-6 weeks due to the extensive editing process involved.",
    },
    {
      question: "How much does it cost?",
      answer:
        "My pricing varies depending on the type of session, duration, and specific requirements. Portrait sessions start at $300, while wedding packages begin at $2,500. I'd be happy to provide a detailed quote based on your needs.",
    },
    {
      question: "How many photos do I get?",
      answer:
        "The number of photos depends on your package. Portrait sessions typically include 30-50 edited images, while wedding packages can include 500-800+ photos. All images are professionally edited and delivered in high resolution.",
    },
  ],
  showBottomButtons = true,
}: PhotographerFaqProps) => {
  return (
    <section className="py-32 ">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12 xl:grid-cols-12 xl:gap-16">
          <div className="flex flex-col  justify-between lg:col-span-2 xl:col-span-4 ">
            <div>
              <div className="mb-8 flex items-start gap-3 sm:gap-4 lg:mb-12">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16">
                  <Image
                    src={profileInfo.image || "/placeholder.svg"}
                    alt={profileInfo.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="mb-1 text-lg font-semibold leading-tight sm:text-xl">
                    {profileInfo.name}
                  </h2>
                  <p className="text-sm sm:text-base">{profileInfo.title}</p>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                  {contactSection.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {contactSection.description}
                </p>
              </div>
            </div>
            <div className="py-4">
              <div

                className="flex group h-auto p-0 text-base text-start hover:bg-transparent sm:text-xl font-medium"
              >
                <span className="border-b-2  border-neutral-600 pb-0.5 transition-colors group-hover:border-neutral-800">
                  {contactSection.linkText}
                </span>
                <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 xl:col-span-8">
            {/* Main Heading */}
            <div className="mb-8 md:text-center lg:mb-16 lg:text-left">
              <h1 className="text-4xl font-medium leading-none tracking-tight  sm:text-6xl">
                {heading}
              </h1>
            </div>

            <div className="max-w-none">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="space-y-0"
              >
                {items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-0 ${index !== items.length - 1 ? "border-b border-gray-200" : ""}`}
                  >
                    <AccordionTrigger className="justify-between px-0 py-6 text-left text-lg font-semibold  hover:no-underline sm:text-xl lg:py-8 lg:text-xl">
                      <span className="pr-4">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pr-8 pt-0 text-sm leading-relaxed text-muted-foreground sm:text-base lg:pb-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq17
