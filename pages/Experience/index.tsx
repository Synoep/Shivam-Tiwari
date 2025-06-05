import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

const Experience: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const experiences = [
    {
      company: "Bluestock",
      role: "Software Development Engineer (SDE) Intern & Team Co-Lead",
      period: "March 2025 – Present",
      achievements: [
        "Co-led a team of 5 in architecting a real-time stock trading platform, increasing transaction throughput by 60% through asynchronous processing.",
        "Engineered scalable APIs that reduced latency from 250ms to under 80ms, supporting 1000+ concurrent trading sessions."
      ],
      tech: ["Real-time Systems", "High-Performance Computing", "API Design", "Team Leadership"]
    },
    {
      company: "Aligner",
      role: "SDE Freelancer",
      period: "July 2024 – Present",
      achievements: [
        "Refactored complex codebases in C++, Java, and Python, reducing memory usage by up to 40% and improving system reliability across 6+ freelance projects.",
        "Enhanced performance via algorithmic improvements and implemented 150+ unit and integration tests to improve test coverage from 60% to 95%."
      ],
      tech: ["C++", "Java", "Python", "Performance Optimization", "Testing"]
    },
    {
      company: "Outlier",
      role: "SDE Freelancer",
      period: "July 2024 – March 2025",
      achievements: [
        "Contributed to RLHF pipelines by optimizing prompt-tuning workflows, improving LLM coherence metrics by 28%.",
        "Enhanced model feedback loops to cut down evaluation latency by 45%, enabling faster deployment cycles in production."
      ],
      tech: ["Machine Learning", "RLHF", "LLM", "Performance Optimization"]
    }
  ];

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Experience - Shivam Tiwari</title>
        <meta
          name="description"
          content="Professional experience and work history of Shivam Tiwari"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Experience - Shivam Tiwari" />
        <meta
          name="description"
          content="Professional experience and work history of Shivam Tiwari"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shivam Tiwari" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      <div className="mt-2 w-full p-2 ml-1 text-left">
        <h2 className="lg:text-5xl pl-5 pb-2 font-bold leading-tight text-indigo-500 text-3xl">
          Experience
        </h2>
        <p className="font-medium pl-5 pb-2 text-gray-400 text-md pt-1 w-4/5">
          My professional journey and work history.
        </p>
        <div className="w-full mt-3 mb-5 pb-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 relative ${
                !isTabletOrMobile ? "pl-8" : "pl-4"
              }`}
            >
              {!isTabletOrMobile && (
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
              )}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-indigo-400 font-medium">{exp.role}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium text-indigo-500 bg-indigo-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Scrollbars>
  );
};

export default Experience; 