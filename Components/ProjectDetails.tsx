import { Scrollbars } from "react-custom-scrollbars-2";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Zoom from "react-medium-image-zoom";
import { motion } from "framer-motion";

const ProjectDetails: React.FC<any> = ({ projectDetails, altt }: any) => {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return !isTabletOrMobile ? (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <div>
        <div
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center rounded-b-xl overflow-hidden"
          style={{ backgroundImage: `url(${projectDetails.banner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center px-4 leading-tight"
          >
            {projectDetails.name}
          </motion.h1>
        </div>
        <div className="pb-6 maincontainerprofileprojects w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 rounded-xl p-8 shadow-2xl mb-10"
            >
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    className="h-16 w-16 rounded-full object-cover"
                    src={projectDetails.logo}
                    alt={altt}
                    width={64}
                    height={64}
                  />
                  <div>
                    <h2 className="text-3xl text-gray-100 font-bold leading-tight">
                      {projectDetails.name}
                    </h2>
                    <p className="text-gray-400 text-lg font-medium">
                      {projectDetails.title}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  {projectDetails.github && (
                    <a
                      href={projectDetails.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                    >
                      <img
                        className="h-6 w-6 mr-2"
                        src="https://img.icons8.com/fluency/144/000000/github.png"
                        alt="Github Icon"
                        width={24}
                        height={24}
                      />
                      GitHub
                    </a>
                  )}
                  {projectDetails.live && (
                    <a
                      href={projectDetails.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h6m0 0v6m0-6L9 3"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                Project Overview
              </h3>
              {projectDetails.description.map((desc: string, i: number) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-gray-300 text-lg leading-relaxed mb-3"
                >
                  {desc}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 rounded-xl p-8 shadow-2xl mb-10"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                {projectDetails?.features && projectDetails.features.map((feature: string, i: number) => (
                  <motion.li key={i} variants={itemVariants}>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 rounded-xl p-8 shadow-2xl mb-10"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectDetails?.tech.map((skill: string, i: number) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    className="px-4 py-2 text-sm font-medium text-indigo-400 bg-indigo-900/30 rounded-full border border-indigo-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 rounded-xl p-8 shadow-2xl mb-10"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                Snapshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectDetails?.snapshots && projectDetails.snapshots.map((shot: string, i: number) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg"
                  >
                    <Zoom zoomMargin={100}>
                      <Image
                        src={shot}
                        alt={`${projectDetails.name} Snapshot ${i + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </Zoom>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {projectDetails?.others && projectDetails.others.length > 0 && (
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-900 rounded-xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                  Other Projects
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Explore other related projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectDetails.others.map((otherProject: any, i: number) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <a href={otherProject.link || otherProject.github} target="_blank" rel="noopener noreferrer" className="block relative p-4">
                        <Image
                          src={otherProject.banner || otherProject.thumbnail}
                          alt={otherProject.name}
                          width={500}
                          height={270}
                          layout="responsive"
                          className="rounded-md mb-4"
                        />
                        <h4 className="text-xl font-bold text-white mb-2">{otherProject.name}</h4>
                        <p className="text-gray-400 text-sm">{otherProject.title}</p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Scrollbars>
  ) : (
    <div className="pb-40 mb-40 w-full">
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url(${projectDetails.banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-white text-3xl sm:text-4xl font-bold text-center px-4 leading-tight"
        >
          {projectDetails.name}
        </motion.h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 rounded-xl p-6 shadow-2xl mb-8"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <Image
              className="h-12 w-12 rounded-full object-cover mb-4"
              src={projectDetails.logo}
              alt={altt}
              width={48}
              height={48}
            />
            <div className="text-center">
              <h2 className="text-2xl text-gray-100 font-bold leading-tight">
                {projectDetails.name}
              </h2>
              <p className="text-gray-400 text-base font-medium">
                {projectDetails.title}
              </p>
            </div>
            <div className="flex space-x-3 mt-4">
              {projectDetails.github && (
                <a
                  href={projectDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-sm"
                >
                  <img
                    className="h-5 w-5 mr-1"
                    src="https://img.icons8.com/fluency/144/000000/github.png"
                    alt="Github Icon"
                    width={20}
                    height={20}
                  />
                  GitHub
                </a>
              )}
              {projectDetails.live && (
                <a
                  href={projectDetails.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h6m0 0v6m0-6L9 3"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
            Project Overview
          </h3>
          {projectDetails.description.map((desc: string, i: number) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-gray-300 text-base leading-relaxed mb-2"
            >
              {desc}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 rounded-xl p-6 shadow-2xl mb-8"
        >
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
            Key Features
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
            {projectDetails?.features && projectDetails.features.map((feature: string, i: number) => (
              <motion.li key={i} variants={itemVariants}>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 rounded-xl p-6 shadow-2xl mb-8"
        >
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {projectDetails?.tech.map((skill: string, i: number) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="px-3 py-1.5 text-sm font-medium text-indigo-400 bg-indigo-900/30 rounded-full border border-indigo-500/30"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 rounded-xl p-6 shadow-2xl mb-8"
        >
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
            Snapshots
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {projectDetails?.snapshots && projectDetails.snapshots.map((shot: string, i: number) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg"
              >
                <Zoom zoomMargin={50}>
                  <Image
                    src={shot}
                    alt={`${projectDetails.name} Snapshot ${i + 1}`}
                    layout="responsive"
                    width={1200}
                    height={675}
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </Zoom>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {projectDetails?.others && projectDetails.others.length > 0 && (
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900 rounded-xl p-6 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
              Other Projects
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Explore other related projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectDetails.others.map((otherProject: any, i: number) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <a href={otherProject.link || otherProject.github} target="_blank" rel="noopener noreferrer" className="block relative p-3">
                    <Image
                      src={otherProject.banner || otherProject.thumbnail}
                      alt={otherProject.name}
                      width={500}
                      height={270}
                      layout="responsive"
                      className="rounded-md mb-3"
                    />
                    <h4 className="text-lg font-bold text-white mb-1">{otherProject.name}</h4>
                    <p className="text-gray-400 text-sm">{otherProject.title}</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
