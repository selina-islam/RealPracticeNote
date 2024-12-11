import React, { useState } from "react";
import { BiCarousel } from "react-icons/bi";

const DataInfo = [
  {
    id: 1,
    img: "/jhankar.jpeg",
    name: "Jhankar Mahbub",
    description:
      "Jhankar (John-kar) Mahbub is a fun author, web developer, speaker, marathon runner, YouTuber, and entrepreneur. He wrote five best selling books in Bengali.",
  },
  {
    id: 2,
    img: "/anisul.jpeg",
    name: "Anisul Islam",
    description:
      " A dedicated Computer Science Teacher, Software Developer, YouTuber, Lifelong Learner,Enthusiastic Badminton Football Cricket, and Chess Player Always here to help and inspire the next generation",
  },
  {
    id: 3,
    img: "/eshan.jpeg",
    name: "Eshan Ahmed Eshan",
    description:
      "Full Stack Web App & Blockchain Developer ( MERN Stack Developer)",
  },
  {
    id: 4,
    img: "/sumit.jpeg",
    name: "Sumit Saha",
    description:
      "Sumit Saha is a Dhaka based Tech Entrepreneur specialized in Full Stack Web Development. Sumit started Learn with Sumitin order to share his passion for web development",
  },
  {
    id: 5,
    img: "/taposh.jpeg",
    name: "Tapas Adhikary",
    description:
      "Tapas is a passionate content creator with 18+ years of experience in Software Development and User Interface Engineering.",
  },
  {
    id: 6,
    img: "/hmnayem.jpeg",
    name: "HM Nayem",
    description:
      "Fullstack Web and Mobile Application Developer, Entrepreneur, and Trainer. I am a passionate tech lover, a problem solver & always ready to face new challenges.",
  },
];

function Carousel() {
  // for current Index
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = DataInfo[currentIndex];
  // pre carousel item
  const Pre = () => {
    setCurrentIndex((param) => (param === 0 ? DataInfo.length - 1 : param - 1));
  };
  // next carousel item
  const Next = () => {
    setCurrentIndex((icchemotonamdewajay) =>
      icchemotonamdewajay === DataInfo.length - 1 ? 0 : icchemotonamdewajay + 1
    );
  };
  //  dot click event
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <section className="w-[50%] mx-auto bg-gray-100 p-4 rounded-md mt-8">
      <h1 className="text-center font-bold text-4xl mb-5">Programmers from Bangladesh</h1>
      <div className="flex justify-around  items-center">
        <button onClick={Pre}>
          <BiCarousel className="w-10 h-10" />
        </button>
        {/* left side */}
        <div className="flex flex-col justify-center items-center gap-3">
          <img className="w-[300px] h-[300px] rounded-lg shadow-md shadow-gray-950" src={slider.img} alt="Photo" />
          <h3 className="text-xl font-bold">{slider.name}</h3>
          <p className="w-[70%] mx-auto text-gray-500 h-[100px] ">{slider.description}</p>
        </div>
        {/* right side */}
        <div></div>
        <button onClick={Next}>
          <BiCarousel className="w-10 h-10" />
        </button>
      </div>
      <div className="space-x-3 text-center my-5">
        {DataInfo.map((q, i) => (
          <button
            onClick={() => handleDotClick(i)}
            key={i}
            className={`w-3 h-3 rounded-full space-x-3 text-center ${
              currentIndex === i ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
