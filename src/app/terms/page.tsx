"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import React, { useState } from "react";

import { sendEmail } from "../../lib/api.js";
import { Loader2 } from "lucide-react";
import Link from "next/link.js";

export default function Terms() {
  return (
    <div className="">
      <PageHeader />
      <PageBody />
      <PageFooter />
    </div>
  );
}

const termsData = [
  "Introduction\n\nWelcome to QNext.AI. By accessing and using the Website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the Website.\n\n",
  "Intellectual Property\n\nAll content on the Website, including but not limited to text, images, graphics, logos, and trademarks, is the property of QNext.AI and protected by applicable copyright and intellectual property laws. You may not reproduce, modify, distribute, or display any content without prior written consent from us.\n\n",
  "User Conduct\n\nYou agree not to use the Website for any unlawful purpose or in any way that may cause harm to the Website or its users. You are solely responsible for any content you submit or post on the Website, and you must not violate any laws, infringe upon the rights of others, or engage in harmful activities.\n\n",
  "Privacy Policy\n\nBy using the Website, you also agree to the terms of our Privacy Policy, which governs how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our data practices.\n\n",
  "Copyright and DMCA\n\nIf you believe that any content on the Website infringes your copyright, please notify us in writing as per the Digital Millennium Copyright Act (DMCA) procedures. We will promptly investigate and take appropriate actions.\n\n",
  "Disclaimers\n\nThe information and content on the Website are provided for general informational purposes only. We make no warranties or representations regarding the accuracy, completeness, or reliability of the content. Your use of the Website is at your own risk.\n\n",
  "Modification of Terms\n\nWe reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after changes are made constitutes your acceptance of the revised terms.\n\n",
  "Termination\n\nWe reserve the right to terminate your access to the Website at our discretion without prior notice if you violate these Terms and Conditions or engage in any harmful or unlawful activities.\n\n",
  "Governing Law and Jurisdiction\n\nThese Terms and Conditions shall be governed by and construed in accordance with the laws of United States of America, and any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in United States of America.\n\n",
  "Indemnification\n\nYou agree to indemnify and hold QNext.AI and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses, including reasonable attorneys' fees, arising out of your use of the Website or any violation of these Terms and Conditions.\n\n",
  "Severability\n\nIf any provision of these Terms and Conditions is found to be invalid or unenforceable, such provision shall be severed from the remainder of the terms, which will remain in full force and effect.\n\n",
];

const PageHeader = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
    <header className="sticky top-0 z-10 drop-shadow-lg">
      <div className="flex justify-between bg-white">
        <Link href={"/"}>
          <Image src="/logo2.png" alt="QNEXT.AI" width={120} height={120} />
        </Link>
        <div className="py-12 h-min mr-12">
          <nav>
            <ul className="flex gap-x-14 ">
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
                <Button className="whitespace-nowrap bg-transparent text-black text-xl hover:bg-[#E9582580] focus:bg-[#E9582580]">
                  Our Newsletter
                </Button>
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
      {showDemoForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-lg h-[37.5rem] w-[52rem] grid justify-items-center">
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
              className="w-48 whitespace-nowrap my-4 text-xl"
              disabled={loading}
              onClick={handleFormSubmit}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Get a Demo"}
            </Button>
            <div className="">
              <button
                type="button"
                onClick={() => setShowDemoForm(false)}
                className="text-gray-500 mr-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const PageBody = () => {
  return (
    <section>
      <div className="container">
        <h1 className="relative top-24 left-28 text-2xl font-medium">
          Terms and Conditions
        </h1>
        <ol className="relative top-32 left-40 list-decimal text-2xl font-light whitespace-pre-line max-w-[68rem]">
          {termsData.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const PageFooter = () => {
  return (
    <footer>
      <div className="relative top-20 py-32 flex justify-evenly text-xl">
        <a href="/about">About Us</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/policy">Privacy Policy</a>
      </div>
    </footer>
  );
};
