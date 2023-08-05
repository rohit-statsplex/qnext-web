"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import React, { useState } from "react";

import { sendEmail } from "../../lib/api.js";
import { Loader2 } from "lucide-react";
import Link from "next/link.js";

export default function PrivacyPolicy() {
  return (
    <div className="">
      <PageHeader />
      <PageBody />
      <PageFooter />
    </div>
  );
}

const policyData = {
  header:
    'Effective Date: 07.24.2023\n\nQNext.AI ("we", "our", or "us") operates QNext.AI (the "Website"). This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our Website.\n\n',
  points: {
    content: [
      "Information\n\nWe Collect We may collect personal information from you when you voluntarily provide it to us, such as when you subscribe to our newsletter, fill out a contact form, or participate in a survey. The information we may collect includes but is not limited to:\n\n",
      "How We Use Your Information\n\nWe may use the information we collect from you for the following purposes:\n\n",
      "Cookies and Similar Technologies\n\nOur Website may use cookies and similar technologies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. You can choose to disable cookies through your browser settings; however, doing so may affect the functionality of our Website.\n\n",
      "Third-Party Disclosure\n\nWe do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third-party service providers who assist us in operating our Website, conducting our business, or providing services to you, as long as they agree to keep this information confidential.\n\n",
      "Security Measures\n\nWe implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, please understand that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.\n\n",
      "Links to External Websites\n\nOur Website may contain links to external websites. We are not responsible for the content or privacy practices of these websites. We encourage you to read the privacy policies of those websites before providing any personal information.\n\n",
      "Children's Privacy\n\nOur Website is not directed to individuals under the age of 13 years. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete such information from our records.\n\n",
      "Changes to the Privacy Policy\n\nWe reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting the updated Privacy Policy on this page. Your continued use of our Website after any changes indicate your acceptance of the revised Privacy Policy.\n\n",
      "Contact Us\n\nIf you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at contact@qnext.ai.\n\n",
    ],
    subpoints: [
      [
        "Name",
        "Email address",
        "Contact information",
        "Demographic information",
        "Other information you choose to provide\n\n",
      ],
      [
        "To personalize your experience on our Website",
        "To send periodic emails and newsletters",
        "To respond to your inquiries, comments, or questions",
        "To improve our Website and services",
        "To conduct surveys and research",
        "To comply with legal obligations\n\n",
      ],
    ],
  },
  footer:
    "By using our Website, you consent to the terms of this Privacy Policy. Last Updated: 24.07.2023",
};

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
          Privacy Policy
        </h1>
        <h1 className="relative top-32 left-28 text-2xl font-light whitespace-pre-line max-w-[67rem]">
          {policyData.header}
        </h1>
        <ol className="relative top-32 left-40 list-decimal text-2xl font-light whitespace-pre-line max-w-[67rem]">
          {policyData.points.content.map((ele, index) => (
            <li key={index}>
              {ele}
              {policyData.points.subpoints[index] && (
                <ul key={index} className="list-disc relative left-12">
                  {policyData.points.subpoints[index].map((ele, index) => (
                    <li key={index}>{ele}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <h1 className="relative top-32 left-28 text-2xl font-light whitespace-pre-line max-w-[68rem]">
          {policyData.footer}
        </h1>
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
