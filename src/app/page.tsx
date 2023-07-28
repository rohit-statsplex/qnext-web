"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { sendEmail } from "../lib/api.js";
import { Loader2 } from "lucide-react";

export default function Home() {
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
    <header>
      <div className="flex justify-between">
        <Image src="/logo.svg" alt="QNEXT.AI" width={150} height={150} />
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

interface expandablesProps {
  index: number;
  title: string;
  description: string;
}

interface featuresProps {
  index: number;
  title: string;
  desc1: string;
  desc2?: string;
}

interface elementsProps {
  index: number;
  title: string;
  description: string;
  points?: string[];
}

interface productsProps {
  name: string;
  description: string;
}
interface pricingProps {
  tier: string;
  cost: string;
  description: string;
  points?: string[];
}

const expandlesData = [
  {
    title: "fast",
    description: "input URLs/content and generate Newsletters in minutes.",
  },
  {
    title: "engaging",
    description:
      "Artifacts incite curiosity and format increases attention span.",
  },
  {
    title: "targeted",
    description:
      "specifically tailored to reach a specific audience or demographic.",
  },
  {
    title: "iterative",
    description: "improve content based on audience reaction.",
  },
];

const featuresData = [
  {
    title: "Cater to an audience",
    description:
      "Speak to your\naudience directly by\nfine-tuning the\nlanguage in-line with\nwhat your audience\nlikes and vibes with.",
    description2:
      "\nChange the ‘tone’ of\nvoice depending upon\nthe psychography of the\nperson reading the\nNewsletter.",
  },
  {
    title: "Geography specific content",
    description:
      "Cater to local tastes\nby targeting according\nto the location of the audience.",
  },
  {
    title: "Hallucination elimination",
    description: "No hallucinations in\nthe Generative AI\ncontent.",
  },
  {
    title: "Automation",
    description:
      "All the functions\nhappen with a press of\na button and you can generate the Newsletter automatically.",
  },
  {
    title: "Human in Loop",
    description:
      "Editor mode allows a\nhuman being to make\nchanges and\neditorialize and\napprove the Newsletter\nbefore the\npublication.",
  },
];

const elementsData = [
  {
    title: "Quiz",
    description: "Serve quizzes generated\nfrom articles.",
    points: [
      "Gets created in one\nclick once you enter\nthe article.",
      "Increases engagement\ndrastically.",
      "Serves as a proxy\nsurvey/feedback from\nusers",
    ],
  },
  {
    title: "Cliffhanger",
    description:
      "Keep your audience\nhanging by every word\nwith these intense\ncliffhangers generated\nout of your articles.",
  },
  {
    title: "Summary",
    description:
      "Summarise an entire\narticle or a group of\narticles into one neat\nparagraph.",
    points: [
      "To the point, concise\ncontent values the\ntime of the reader.",
      "Increases engagement.",
    ],
  },
  {
    title: "Summary of summaries",
    description:
      "Summarise a bunch of\nsummaries together to\nget an overall gist of\nwhat is happening in\nthe Newsletter.",
  },
];

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

const productData = [
  {
    name: "Video\nSummarizer",
    description:
      "Want to know what\na video is about\nwithout watching\nthe whole video\nand depending upon\nclick-baity,\nmisleading\ndescriptions?\n\nSummarize videos\n(or entire\nchannels), to\neasily consumable\nsize & easy to\nunderstand.",
  },
  {
    name: "Podcast\nSummarizer",
    description:
      "Summarize and keep\ntrack of your\nfavorite Podcasts,\nor sample what\nthey have to say\nbefore you listen\nto the whole\nthing.",
  },
  {
    name: "Trending News\nQuiz",
    description:
      "Create a quiz out\nof an article or\nthe latest\ntrending news to\nbetter engagement\non your website.",
  },
];

const HomeFeatures = ({ index, title, desc1, desc2 }: featuresProps) => {
  return (
    <div
      className="text-2xl"
      style={{ gridRow: `${index === 0 ? "1 / span 2" : ""}` }}
    >
      {title} <br />
      <div className="flex my-4">
        <Image
          src={"/bullet2.png"}
          alt=""
          width={20}
          height={20}
          className="h-min relative top-2 right-2"
        />
        <span className="font-light whitespace-pre-wrap">{desc1}</span>
      </div>
      <span className="relative -top-4 font-light whitespace-pre-wrap">
        {desc2}
      </span>
    </div>
  );
};

const HomeExpandables = ({ title, description, index }: expandablesProps) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const [animatedProps, api] = useSpring(() => ({
    from: {
      width: 100,
    },
  }));

  return (
    <div style={{ gridArea: `item${index}` }}>
      <h1
        className="text-[32px] flex hover:cursor-pointer"
        // onClick={handleTitleClick}
      >
        {title}
        <Image
          src="/arrow-right.svg"
          alt=""
          width={48}
          height={48}
          className="h-min"
        />
        <animated.div
          className="whitespace-pre-wrap text-2xl my-2 h-min"
          style={animatedProps}
        >
          {description}
        </animated.div>
      </h1>
    </div>
  );
};

const HomeGAIElements = ({
  title,
  description,
  points,
  index,
}: elementsProps) => {
  return (
    <div style={{ gridArea: `item${index}` }}>
      <h2
        className={`relative ${
          index === 3 ? "-top-32" : "top-0"
        }   text-2xl border-2 rounded-xl whitespace-nowrap px-6 flex justify-center mx-auto w-min font-medium`}
      >
        {title}
        <Image src={"/arrow-top-right.svg"} alt={"↗"} width={24} height={24} />
      </h2>
      <div
        className={`relative ${
          index === 3 ? "-top-32" : "top-0"
        } text-2xl my-8 whitespace-pre-wrap font-light`}
      >
        {description}
        {points !== undefined && (
          <ul className="relative left-9 list-disc list-outside whitespace-pre-wrap">
            {points.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const HomePricing = ({ tier, cost, description, points }: pricingProps) => {
  return (
    <div className="bg-[#F2F7F2] px-14 py-8 rounded-[36px] border-black border-solid border-2 w-[298px] h-[424px]">
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
        {points !== undefined && (
          <ul className="relative left-9 list-disc list-outside whitespace-pre-wrap">
            {points.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const HomeProducts = ({ name, description }: productsProps) => {
  return (
    <div className=" whitespace-pre-wrap">
      <div className="text-4xl my-16">{name}</div>
      <div className="text-2xl font-light">{description}</div>
    </div>
  );
};

const HomeBody = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    await sendEmail({
      email: email,
      subject: "Signing Up For Updates",
    });
    setEmail("");
    setLoading(false);
    setShowSignUpForm(false);
  };

  return (
    <>
      {showSignUpForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-lg h-80 w-[52rem] grid justify-items-center">
            <h2 className="text-2xl font-semibold flex justify-center">
              Sign Up for More Updates
            </h2>
            <form onSubmit={handleFormSubmit} className="flex gap-x-8 my-10">
              <div className="text-2xl font-semibold grid place-content-center">
                Email ID
              </div>
              <Input
                type="email"
                value={email}
                className="w-[37rem] h-14 px-4 my-4 rounded-md bg-[#D9D9D9]"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </form>

            <Button
              type="submit"
              className="w-48 whitespace-nowrap text-xl"
              disabled={loading}
              onClick={handleFormSubmit}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
            <div className="my-2">
              <button
                type="button"
                onClick={() => setShowSignUpForm(false)}
                className="text-gray-500 mr-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <section>
        {/* craft disruptive */}
        <div className="container m -auto">
          <div className="bg-polka pb-12">
            <div className="flex ml-16 pt-24">
              <div>
                <h1 className="whitespace-nowrap text-[40px]">
                  craft
                  <span className="italic">
                    <b>disruptive</b> <br />
                  </span>
                  newsletters <br /> effortlessly
                </h1>
              </div>
              <div className="ml-auto">
                <Image src={"/video.svg"} alt={""} width={734} height={434} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container  m-auto">
          <div
            className="grid mx-auto"
            style={{ gridTemplateAreas: "'item0 item1 .' '. item2 item3'" }}
          >
            {expandlesData.map((ele, i) => (
              <HomeExpandables
                key={i}
                index={i}
                title={ele.title}
                description={ele.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        {/* unleash the power */}
        <div className="container m-auto p-20">
          <div className="flex justify-around m-auto">
            <div className="left-p m-auto">
              <Image
                src={"/Infographic.png"}
                alt={""}
                width={808}
                height={428}
                className=""
              />
            </div>
            <div className="text-4xl right-p m-auto ">
              <span>
                unleash the power
                <br />
                of Generative AI <br />
                <div className="ml-36">
                  <span className="text-[32px] italic font-medium">
                    for your
                    <br />
                    Newsletter
                  </span>
                </div>
              </span>
              <Image
                src={"/dot-grid.svg"}
                alt={"background image"}
                width={120}
                height={120}
                className="ml-auto pt-44"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto pt-16">
          <div className="text-4xl text-center font-mono">
            What does Generative-AI do for your Newsletter?
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 justify-items-center p-12">
            <div className="row-span-3">
              <div className="text-2xl ">
                Cater to an audience
                <br />
                <div className="flex my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt="bullet point image"
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2"
                  />
                  <span className="font-light whitespace-pre-wrap">
                    Speak to your <br /> audience directly by <br /> fine-tuning
                    the <br /> language in-line with <br /> what your audience{" "}
                    <br /> likes and vibes with.
                    <div className="my-4">
                      <span>
                        Change the 'tone' of
                        <br />
                        voice depending upon
                        <br />
                        the psychography of the
                        <br />
                        person reading the
                        <br />
                        Newsletter.
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-2xl">
                Geography specific content
                <br />
                <div className="flex my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2"
                  />
                  <span className="font-light whitespace-pre-wrap">
                    Cater to local tastes
                    <br />
                    by targeting according
                    <br />
                    to the location of the audience.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl ">
                Hallucination elimination
                <br />
                <div className="flex my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2"
                  />
                  <span className="font-light whitespace-pre-wrap">
                    No hallucinations in
                    <br />
                    the Generative AI
                    <br />
                    content.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl ">
                Automation
                <br />
                <div className="flex my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2"
                  />
                  <span className="font-light whitespace-pre-wrap">
                    All the functions
                    <br />
                    happen with a press of
                    <br />a button and you can generate the Newsletter
                    automatically.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl">
                Human in Loop
                <br />
                <div className="flex my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2"
                  />
                  <span className="font-light whitespace-pre-wrap">
                    Editor mode allows a<br />
                    human being to make
                    <br />
                    changes and
                    <br />
                    editorialize and
                    <br />
                    approve the Newsletter
                    <br />
                    before the
                    <br />
                    publication.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto">
          <div className="flex justify-between px-12 text-4xl">
            <Image src={"/dot-grid.svg"} alt={""} width={120} height={120} />
            <span className="py-6">Generative-AI elements</span>
            <Image
              src={"/dot-grid.svg"}
              alt={""}
              width={120}
              height={120}
              className=""
            />
          </div>
          <div
            className="grid grid-cols-3 justify-items-center"
            style={{ gridTemplateAreas: "'item0 item1 item2' '. item3 .'" }}
          >
            {elementsData.map((ele, i) => (
              <HomeGAIElements
                key={i}
                index={i}
                title={ele.title}
                description={ele.description}
                points={ele.points}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto flex justify-center">
          <Image src={"/dot_separator.svg"} alt={""} width={1022} height={40} />
        </div>
        <div className="container m-auto text-center text-4xl">
          the future of Newsletters is here. where are you?
        </div>
      </section>
      <section className="">
        <div className="text-center text-4xl pt-24 pb-12">pricing</div>
        <div className=" grid gap-x-24 grid-cols-3 justify-items-center">
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

      <section className="container">
        <div className="pt-20 pl-20 text-4xl">Our Other Products</div>
        <div className="grid grid-cols-3 justify-items-center">
          {productData.map((ele, i) => (
            <HomeProducts
              key={i}
              name={ele.name}
              description={ele.description}
            />
          ))}
        </div>

        <div
          className="text-xl flex justify-center hover:cursor-pointer"
          onClick={handleSignUpClick}
        >
          <u>Sign Up for Updates</u>
        </div>
      </section>

      <section className="p-8 container">
        <div className="text-center text-4xl py-8">Twitter Feeds</div>
        <div className="bg-blue-400 py-8 px-48 overflow-auto h-[27rem] mx-16 rounded-2xl border-slate-200 border">
          <a
            className="twitter-timeline"
            href="https://twitter.com/QNext_ai?ref_src=twsrc%5Etfw"
          >
            Tweets by QNext_ai
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
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
