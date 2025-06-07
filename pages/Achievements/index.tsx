import { NextPage } from "next";
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
    "U-19 National Softball Team Captain",
    "4x National Player in Baseball and Softball",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>Achievements - Shivam Tiwari</title>
        <meta
          name="description"
          content="My achievements and accomplishments."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
              My Achievements
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my notable achievements and accomplishments.
            </p>
          </motion.div>
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
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700/50 min-h-[120px] flex items-center">
                  <p className="text-gray-200 text-lg font-medium w-full text-center">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Achievements; 