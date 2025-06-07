import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import Head from "next/head";
import { motion } from "framer-motion";

const Achievements: NextPage = () => {
  const achievementsList = [
    "Vice President, Geeks for Geeks RBU (2023 - Present)",
    "3X Hackathon Finalist",
    "Achieved Global Rank 10 in CodeChef Div2 Contest",
    "Pupil at Codeforces",
    "3 star in CodeChef",
    "Solved Across 1000+ DSA Problems",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Achievements - Shivam Tiwari</title>
        <meta
          name="description"
          content="My achievements and accomplishments."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="maincontainerprofileprojects w-full px-5 pt-0 pb-8">
        <h2 className="lg:text-5xl pt-8 pb-4 font-bold leading-tight text-indigo-500 text-3xl">
          My Achievements
        </h2>
        <p className="font-medium pt-2 pb-6 text-gray-400 text-md w-4/5">
          Here are some of my notable achievements and accomplishments.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <p className="text-gray-200 text-lg font-medium">{achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Scrollbars>
  );
};

export default Achievements; 