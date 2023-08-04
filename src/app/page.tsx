"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "./common/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { sendEmail } from "../lib/api.js";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import * as EmailValidator from "email-validator";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Navbar />
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

  useEffect(() => {
    // Load the Twitter widget script on the client side
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10 drop-shadow-lg">
        <div className="md:flex justify-between hidden bg-white">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="QNEXT.AI" width={150} height={150} />
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
      {/* <div style={{ height: "150px", visibility: "hidden" }}></div> */}
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

interface expandablesProps {
  index: number;
  title: string;
  description: string;
}
interface elementsProps {
  index: number;
  title: string;
  description: string;
  points?: string[];
  link: string;
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

const elementsData = [
  {
    title: "Quiz",
    description: "Serve quizzes generated\nfrom articles.",
    points: [
      "Gets created in one\nclick once you enter\nthe article.",
      "Increases engagement\ndrastically.",
      "Serves as a proxy\nsurvey/feedback from\nusers",
    ],
    link: "#quiz",
  },
  {
    title: "Cliffhanger",
    description:
      "Keep your audience\nhanging by every word\nwith these intense\ncliffhangers generated\nout of your articles.",
    link: "#cliffhanger",
  },
  {
    title: "Summary",
    description:
      "Summarise an entire\narticle or a group of\narticles into one neat\nparagraph.",
    points: [
      "To the point, concise\ncontent values the\ntime of the reader.",
      "Increases engagement.",
    ],
    link: "#summary",
  },
  {
    title: "Summary of summaries",
    description:
      "Summarise a bunch of\nsummaries together to\nget an overall gist of\nwhat is happening in\nthe Newsletter.",
    link: "#sos",
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
  link,
}: elementsProps) => {
  return (
    <div style={{ gridArea: `item${index}` }}>
      <Link href={"/features" + link}>
        <h2
          className={`relative ${
            index === 3 ? "-top-32" : "top-0"
          }   text-2xl border-2 rounded-xl whitespace-nowrap px-6 flex justify-center mx-auto w-min font-medium`}
        >
          {title}
          <Image
            src={"/arrow-top-right.svg"}
            alt={"↗"}
            width={24}
            height={24}
          />
        </h2>
      </Link>

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

  const isValidEmail = EmailValidator.validate(email);

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
          <div className="bg-white p-10 rounded-lg h-80 w-[52rem] grid justify-items-center relative">
            <div className="absolute top-2 right-2">
              <button
                type="button"
                onClick={() => setShowSignUpForm(false)}
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
            {email !== "" && !isValidEmail && (
              <p className="text-red-500 -mt-4">
                Please enter a valid email address.
              </p>
            )}
            <Button
              type="submit"
              className={`w-48 whitespace-nowrap text-xl mt-4 ${
                isValidEmail
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
              disabled={loading}
              onClick={handleFormSubmit}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
          </div>
        </div>
      )}
      <section>
        {/* craft disruptive */}
        <div className="md:container m-auto">
          <div className="bg-polka pb-12">
            <div className="md:flex 2xl:ml-16 pt-0 2xl:pt-24 ">
              <div className="px-8 md:px-8 text-center md:text-inherit">
                <h1 className="whitespace-nowrap md:text-[40px]">
                  craft
                  <span className="italic pl-4">
                    <b>disruptive</b> <br />
                  </span>
                  newsletters <br /> effortlessly
                </h1>
              </div>
              <div className="ml-auto">
                <Image
                  src={"/genBrew.jpg"}
                  alt={""}
                  width={734}
                  height={434}
                  className="px-8 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto">
          <div
            className="md:grid mx-auto hidden"
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
        <div className="md:container m-auto px-6 md:py-20  md:px-4">
          <div className="flex md:flex-row flex-col justify-around m-auto">
            <div className="left-p m-auto ">
              <Image
                src={"/Infographic.png"}
                alt={""}
                width={808}
                height={428}
                className=""
              />
            </div>
            <div className="md:text-4xl right-p my-auto text-left md:text-inherit py-4  md:py-0">
              <span>
                unleash the power
                {/* <div className="hidden md:block"> */}
                <br />
                {/* </div> */}
                of Generative AI <br />
                <div className="md:ml-36 text-center md:text-inherit">
                  <span className="md:text-[32px] italic font-medium">
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
                className="md:ml-auto hidden md:block md:pt-44"
              />
            </div>
          </div>
          <a
            href="#"
            // onclick="topFunction()"
            id="back-to-top"
            className="relative left-[80rem] -top-32 back-to-top rounded-2xl bg-[#D9D9D9] w-min h-min p-4"
            style={{ display: "block" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-up fea icon-sm icons align-middle"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </a>
        </div>
      </section>

      <section>
        <div className="md:container m-auto md:pt-8">
          <div className="md:text-4xl text-xl text-center font-mono p-4 md:p-0">
            What does Generative-AI do for your Newsletter?
          </div>
          <div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-2 justify-items-center md:p-12">
            <div className="md:row-span-3 md:col-span-1 col-span-2">
              <div className="md:text-2xl ">
                Cater to an audience
                <br />
                <div className="flex md:my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt="bullet point image"
                    width={20}
                    height={20}
                    className="h-min md:block relative top-2 right-2 hidden"
                  />
                  <span className="font-light whitespace-pre-wrap">
                    Speak to your <br /> audience directly by <br /> fine-tuning
                    the <br /> language in-line with <br /> what your audience
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
            <div className="p-2 md:p-0 md:row-span-3 md:col-span-1 col-span-2">
              <div className="md:text-2xl">
                Geography specific content
                <br />
                <div className="flex md:my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative md:top-2 top-4 md:right-2 md:block hidden"
                  />
                  <span className="font-light whitespace-pre-wrap md:p-2 md:p-initial">
                    Cater to local tastes
                    <br />
                    by targeting according
                    <br />
                    to the location of the audience.
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-0 md:row-span-3 md:col-span-1 col-span-2">
              <div className="md:text-2xl px-16 md:px-0">
                Hallucination elimination
                <br />
                <div className="flex md:my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2 md:block hidden "
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
            <div className="p-2 md:p-0 md:row-span-3 md:col-span-1 col-span-2">
              <div className="md:text-2xl px-16 md:px-0">
                Automation
                <br />
                <div className="flex md:my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2 md:block hidden "
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
            <div className="md:text-2xl p-2 md:p-0 md:row-span-3 md:col-span-1 col-span-2">
              <div className=" px-16 md:px-0">
                Human in Loop
                <br />
                <div className="flex md:my-4">
                  <Image
                    src={"/bullet2.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="h-min relative top-2 right-2 md:block hidden "
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
        <div className="md:container m-auto">
          <div className="flex justify-between md:px-12 md:text-4xl text-center md:text-inherit">
            <Image src={"/dot-grid.svg"} alt={""} width={120} height={120} />
            <span className="py-6 text-center md:text-left">
              Generative-AI elements
            </span>
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
                link={ele.link}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto flex justify-center">
          <Image src={"/dot_separator.svg"} alt={""} width={1022} height={40} />
        </div>
        <div className="container m-auto text-center md:text-4xl">
          the future of Newsletters is here. where are you?
        </div>
      </section>
      <section className="">
        <div className="text-center md:text-4xl pt-24 pb-12">pricing</div>
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
        <div className="md:pt-20 md:pl-20 md:text-4xl">Our Other Products</div>
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

      <section className="md:p-8 md:container">
        <div className="text-center text-4xl py-8">Twitter Feeds</div>
        <div className="bg-twitter py-8 px-48 overflow-auto h-[27rem] mx-16 rounded-2xl border-slate-200 border">
          <a
            className="twitter-timeline"
            href="https://twitter.com/QNext_ai?ref_src=twsrc%5Etfw"
          >
            Tweets by QNext_ai
          </a>
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
