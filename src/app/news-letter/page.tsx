"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/api";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as EmailValidator from "email-validator";

export default function Features() {
  return (
    <>
      <HomeHeader />
      <HomeBody />
    </>
  );
}

const HomeHeader = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = EmailValidator.validate(email);

  const handleDemoClick = () => {
    setShowDemoForm(true);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    await sendEmail({
      email: email,
      message: message,
      subject: "Scheduling a Demo",
    });
    setEmail("");
    setMessage("");
    setLoading(false);
    setShowDemoForm(false);
  };
  return (
    <>
      <header className="sticky top-0 z-10 drop-shadow-lg">
        <div className="md:flex justify-between hidden bg-white">
          <Link href={"/"}>
            <Image src="/logo2.png" alt="QNEXT.AI" width={120} height={120} />
          </Link>
          <div className="py-12 h-min 2xl:mr-12">
            <nav>
              <ul className="flex 2xl:gap-x-14 mr-4">
                <li>
                  <a href="/">
                    <Button className="whitespace-nowrap bg-transparent text-black text-xl hover:bg-[#E9582580] focus:bg-[#E9582580]">
                      Home
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="/features">
                    <Button className="whitespace-nowrap bg-transparent text-black text-xl hover:bg-[#E9582580] focus:bg-[#E9582580]">
                      Features
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="/news-letter">
                    <Button className="whitespace-nowrap bg-transparent text-black text-xl hover:bg-[#E9582580] focus:bg-[#E9582580]">
                      Our Newsletter
                    </Button>
                  </a>
                </li>
                <li>
                  <Button
                    className="w-48 whitespace-nowrap text-xl"
                    onClick={handleDemoClick}
                  >
                    Get a Demo
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {showDemoForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-lg h-[37.5rem] w-[52rem] grid justify-items-center relative">
            <div className="absolute top-2 right-2">
              <button
                type="button"
                onClick={() => setShowDemoForm(false)}
                className="text-gray-500 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 5L19 19M5 19L19 5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-semibold flex justify-center text-center">
              Kindly enter your details to get a demo of the Newsletter Builder.
            </h2>
            <form onSubmit={handleFormSubmit} className="">
              <div className="flex">
                <div className="relative top-6 text-2xl font-semibold mr-8">
                  Email ID
                </div>
                <Input
                  type="email"
                  className="w-[37rem] h-14 px-4 py-2 my-4 rounded-md bg-[#D9D9D9]"
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </div>
              {email !== "" && !isValidEmail && (
                <p className="text-red-500 -mt-4 relative text-center">
                  Please enter a valid email address.
                </p>
              )}
              <div className="flex">
                <div className="relative top-6 text-2xl font-semibold  mr-12">
                  Message
                </div>
                <Textarea
                  className="w-[37rem] h-56 px-4 py-2 my-4 rounded-md bg-[#D9D9D9]"
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
              </div>
            </form>
            <Button
              type="submit"
              className={`w-48 whitespace-nowrap my-4 text-xl mt-4 ${
                isValidEmail
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
              disabled={loading}
              onClick={handleFormSubmit}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Get a Demo"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

interface pricingProps {
  tier: string;
  cost: string;
  description: string;
  points?: string[];
}

const pricingData = [
  {
    tier: "simple",
    cost: "Free",
    description: "All the\nfeatures.",
    points: ["Summaries", "Quizzes", "Cliffhangers", "Summary of\nSummaries"],
  },
  {
    tier: "connected",
    cost: "15$/month",
    description:
      "Additionally,\nthe Newsletter\nBuilder will be\nlinked to your\nCMS",
  },
  {
    tier: "enterprise",
    cost: "Custom",
    description: "Customization\nOptions\n\nhuman in loop\nmonitor",
  },
];
const HomePricing = ({ tier, cost, description, points }: pricingProps) => {
  return (
    <div className=" bg-[#F2F7F2] px-14 py-8 rounded-[36px] border-black border-solid border-2 w-[298px] h-[424px]">
      <div className="relative -left-8 flex justify-center text-2xl font-light">
        <Image
          src={"/bullet.svg"}
          alt={""}
          width={34}
          height={34}
          className="mx-6"
        />
        {tier}
      </div>
      <div className="text-4xl flex justify-center my-4">{cost}</div>
      <div className="relative text-xl my-6 font-light">you get:</div>
      <div className="relative text-xl whitespace-pre-wrap font-light">
        {description}
        {points && (
          <ul className="pl-8 list-disc list-outside whitespace-pre-wrap">
            {points.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
const HomeBody = () => {
  return (
    <>
      <section className="m-auto container py-8 h-screen">
        <div className="text-center">COMING SOONER THAN IMAGINED!</div>
      </section>
      <footer>
        <div className="py-16 flex justify-around">
          <a href="/about">About Us</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/policy">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};
