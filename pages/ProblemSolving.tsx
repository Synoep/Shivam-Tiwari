import { NextPage } from "next";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Link from "next/link";

const ProblemSolving: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return (
    <>
      <Head>
        <title>Problem Solving</title>
        <meta
          name="description"
          content={`Profiles for LeetCode, CodeForces, and Code Chef`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Problem Solving"} />
        <meta
          name="description"
          content={`Profiles for LeetCode, CodeForces, and Code Chef`}
        />
        <link rel="canonical" href={"https://www.shivamtiwari.com/problemsolving"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.shivamtiwari.com/problemsolving"} />
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
      {!isTabletOrMobile ? (
        <article className="ml-3 text-left bg-app bg-center bg-no-repeat bg-cover ">
          <section className="pr-5 pt-10">
            <div className="flex flex-row justify-center items-center rounded-lg ">
              <main className="flex flex-col lg:flex-row backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                <div className="flex-1 p-4 lg:p-6">
                  <div className="text-lg text-white mb-4 flex items-center">
                    <div className="md:flex items-cente text0 ">
                      <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
                        Problem Solving
                      </h1>
                    </div>
                  </div>
                  <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                    Here are some of my profiles on competitive programming platforms.
                  </div>
                  <div className="grid gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    {/* LeetCode Profile */}
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <Link passHref target="_blank" href="https://leetcode.com/u/synoep/">
                          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" width="100%" className="rounded-lg" alt="LeetCode Icon" />
                        </Link>
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        LeetCode
                      </div>
                      <div className="text-white font-normal">
                        My LeetCode profile.
                      </div>
                    </div>
                    {/* CodeForces Profile */}
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <Link passHref target="_blank" href="https://codeforces.com/profile/Synoep">
                          <img src="/codeforces.png" width="100%" className="rounded-lg" alt="CodeForces Icon" />
                        </Link>
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        CodeForces
                      </div>
                      <div className="text-white font-normal">
                        My CodeForces profile.
                      </div>
                    </div>
                    {/* Code Chef Profile */}
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <Link passHref target="_blank" href="https://www.codechef.com/users/baroushoei">
                          <img src="https://img.icons8.com/color/100/null/codechef.png" width="100%" className="rounded-lg" alt="Code Chef Icon" />
                        </Link>
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Code Chef
                      </div>
                      <div className="text-white font-normal">
                        My Code Chef profile.
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </article>
      ) : (
        <article className="text-left bg-app bg-center bg-no-repeat bg-cover ">
          <section className="pt-10">
            <div className="flex flex-row justify-center items-center rounded-lg ">
              <main className="flex flex-col lg:flex-row backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl mr-1 ml-1 mt-5 overflow-hidden w-full ">
                <div className="flex-1 p-3">
                  <div className="text-lg text-white mb-4 flex items-center">
                    <div className="md:flex items-cente text0 ">
                      <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
                        Problem Solving
                      </h1>
                    </div>
                  </div>
                  <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                    Here are some of my profiles on competitive programming platforms.
                  </div>
                  <div className="grid gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    {/* LeetCode Profile */}
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <Link passHref target="_blank" href="https://leetcode.com/u/synoep/">
                          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" width="100%" className="rounded-lg" alt="LeetCode Icon" />
                        </Link>
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        LeetCode
                      </div>
                      <div className="text-white font-normal">
                        My LeetCode profile.
                      </div>
                    </div>
                    {/* CodeForces Profile */}
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <Link passHref target="_blank" href="https://codeforces.com/profile/Synoep">
                          <img src="/codeforces.png" width="100%" className="rounded-lg" alt="CodeForces Icon" />
                        </Link>
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        CodeForces
                      </div>
                      <div className="text-white font-normal">
                        My CodeForces profile.
                      </div>
                    </div>
                    {/* Code Chef Profile */}
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <Link passHref target="_blank" href="https://www.codechef.com/users/baroushoei">
                          <img src="https://img.icons8.com/color/100/null/codechef.png" width="100%" className="rounded-lg" alt="Code Chef Icon" />
                        </Link>
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Code Chef
                      </div>
                      <div className="text-white font-normal">
                        My Code Chef profile.
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default ProblemSolving; 