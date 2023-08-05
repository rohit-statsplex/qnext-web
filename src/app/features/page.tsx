"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/api";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

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
          </div>
        </div>
      )}
    </header>
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
      <section className="m-auto container bg-polka2">
        <div className="flex">
          <h1 className="whitespace-nowrap text-[32px] font-medium p-12">
            Let's talk about what you can do!
            <div className="text-2xl font-bold">
              <div className="flex p-8">
                <div className="left-p" id="quiz">
                  Quiz
                </div>
                <div className="right-p">
                  <div className="font-light mx-28">
                    Serve quizzes created
                    <br />
                    from articles.
                    <ul className="list-disc list-outside pl-8">
                      <li>
                        Gets created in one <br />
                        click once you enter <br />
                        the article.
                      </li>
                      <li>
                        Increases engagement <br />
                        drastically.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </h1>
          {/* <div className="bg-polka2"></div> */}
        </div>

        <div className="flex justify-between  py-16">
          <Image
            src={"/quiz.png"}
            alt={""}
            width={808}
            height={428}
            className="h-min m-auto"
          />
          <div className="text-2xl max-w-[354px] italic m-auto">
            quizzes are designed to engage participants in an interactive and
            stimulating manner, encouraging them to recall information, think
            critically, and apply their knowledge. The questions are derived
            from the article and increase interaction and memorability of your
            Newsletter.
          </div>
        </div>
      </section>

      <section className="container py-8 m-auto">
        <h2 className="text-2xl flex font-bold px-16" id="summary">
          Summary
          <div className="text-2xl font-light max-w-[344px] mx-28">
            Summarise an entire article or a group of articles into one neat
            paragraph.
            <ul className="pl-8 list-disc list-outside">
              <li>
                To the point, concise content values the time of the reader.
              </li>
              <li>Increases engagement</li>
            </ul>
          </div>
          <Image
            src={"/dot-grid.svg"}
            alt={""}
            width={120}
            height={120}
            className="mx-auto"
          />
        </h2>
        <div className="flex justify-between p-12">
          <div className="text-2xl max-w-[354px] italic m-auto py-12">
            Effortlessly summarize lengthy articles, providing users with
            concise and comprehensive insights in a fraction of the time. Say
            goodbye to the overwhelming task of sifting through endless
            paragraphs, as it intelligently analyzes the content, identifies key
            points, and distills them into clear and coherent summaries.
          </div>
          <Image
            src={"/summary.png"}
            alt={"summary image"}
            width={808}
            height={428}
            className="m-auto h-min"
          />
        </div>
      </section>

      <section className="m-auto container">
        <h2 className="text-2xl flex font-bold m-auto px-16" id="cliffhanger">
          Cliffhanger
          <div className="text-2xl mx-28 max-w-[344px] font-light">
            Keep your audience hanging by every word with these intense
            cliffhangers generated out of your articles.
          </div>
          <Image src={"/dot-grid.svg"} alt={""} width={120} height={120} />
        </h2>
        <div className="py-16 flex justify-between">
          <Image
            src={"/cliffhanger.png"}
            alt={""}
            width={808}
            height={428}
            className=" h-min"
          />
          <div className="text-2xl italic max-w-[354px] m-auto">
            Effortlessly build tension and intrigue, strategically placing
            suspenseful twists and turns throughout their content, keeping
            readers guessing until the very last word. Every article becomes an
            immersive journey that readers won&apos;t be able to resist.
          </div>
        </div>
      </section>

      <section className="m-auto container py-8">
        <h2 className=" text-2xl flex font-bold" id="sos">
          Summary of Summaries
          <div className="text-2xl mx-28 font-light max-w-[344px]">
            Form an overall summary from different summaries of articles.
          </div>
        </h2>
        <div className="flex justify-between py-16">
          <div className="text-2xl max-w-[354px] text italic">
            Amalgamate and synthesize multiple summaries into a cohesive and
            comprehensive overview. You can input various summaries from
            different sources, our tool intelligently merges them, eliminating
            redundancy while preserving the essential insights from each
            summary. Whether you&apos;re researching a complex topic, analyzing
            different perspectives, or seeking a well-rounded understanding of a
            subject, this will save you time and effort by providing an
            all-encompassing summary.
          </div>
          <Image
            src={"/SoS.svg"}
            alt={""}
            width={808}
            height={428}
            className="h-min m-auto"
          />
        </div>
      </section>

      <section className="m-auto container py-8 flex flex-col">
        <h2 className="text-4xl text-center pb-16">Geo-related Content</h2>
        <div className="m-auto text-2xl bg-[#F2F7F2] p-6 rounded-[36px] border-black border-solid border-2 max-w-[536px] max-h-[698px]">
          Tailor your messages to resonate with specific audiences in different
          locations. Our platform utilizes advanced geotagging and data
          analysis, enabling users to understand regional preferences, cultural
          nuances, and trending topics in real-time. Whether it&apos;s crafting
          location-specific marketing campaigns, localized news articles, or
          region-targeted social media posts, GeoContentPro ensures that every
          piece of content is finely tuned to engage and connect with local
          communities. Say goodbye to generic messaging and hello to a
          personalized approach that speaks directly to your audience&apos;s
          interests and needs.
        </div>
      </section>

      <section className="m-auto container py-8">
        <div className="text-center text-4xl py-16">pricing</div>
        <div className="grid gap-x-24 grid-cols-3 justify-items-center">
          {pricingData.map((ele, i) => (
            <HomePricing
              key={i}
              tier={ele.tier}
              cost={ele.cost}
              description={ele.description}
              points={ele.points}
            />
          ))}
        </div>
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
