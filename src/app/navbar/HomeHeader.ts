// "use client";
// import { useState } from "react";
// import { sendEmail } from "@/lib/api";

// const HomeHeader = () => {
//   const [showDemoForm, setShowDemoForm] = useState(false);
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleDemoClick = () => {
//     setShowDemoForm(true);
//   };
//   const handleFormSubmit = async (e: { preventDefault: () => void }) => {
//     setLoading(true);
//     e.preventDefault();
//     await sendEmail({
//       email: email,
//       message: message,
//       subject: "Scheduling a Demo",
//     });
//     setEmail("");
//     setMessage("");
//     setLoading(false);
//     setShowDemoForm(false);
//   };
//   return;
// };

// export default HomeHeader;
