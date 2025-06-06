import { NextPage } from "next";
import React, { useEffect } from "react";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Gaming: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  const [play, setPlay] = useState<any>(true);

  const player: any = React.createRef();

  useEffect(() => {
    if (player.current) {
      player.current.play();
    }
  }, []);

  const managePlayer = (play: any) => {
    if (player.current) {
      if (play) {
        player.current.play();
      } else {
        player.current.pause();
      }
    }
    setPlay(play);
  };

  return (
    <>
      <Head>
        <title>Gaming </title>
        <meta
          name="description"
          content={` Playing Games is one of the activities i like to do in my
                    spare time`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Gaming"} />
        <meta
          name="description"
          content={` Playing Games is one of the activities i like to do in my
                    spare time`}
        />
        <link rel="canonical" href={"https://www.shivamtiwari.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.shivamtiwari.com"} />
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
          <section className="pr-5  pt-10">
            <div className="animeplayer pr-3 pt-3">
              {play ? (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(false)}
                />
              ) : (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(true)}
                />
              )}
            </div>
            <audio autoPlay loop ref={player}>
              <source src="/valorantring.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row justify-center items-center rounded-lg ">
              <main className="flex flex-col lg:flex-row  backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                <div className="flex-1 p-4 lg:p-6">
                  <div className="text-lg text-white mb-4 flex items-center">
                    <div className="md:flex items-cente text0 ">
                      <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
                        Gaming
                      </h1>
                    </div>
                  </div>
                  <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                    {" "}
                    Playing Games is one of the activities i like to do in my
                    spare time. At present, I play below listed games in my
                    spare time. You can reach out to me if you want to play as a
                    team.
                  </div>{" "}
                  <div className="grid  gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGVydmVvZ3RwNncxaG5ndW94NjI4bGJybmh5ZXAwa2dwdTZqYjZiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5AQKEZLrP1W8S2WBTA/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="God of War gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        God Of War
                      </div>
                      <div className="text-white font-normal">
                        A critically acclaimed action-adventure game series.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTd2cnJsaDVmaHhpeXZzbDJicjJ2aXhjZzRkazhneTNkNTZ5dG1yNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ySvhFxq6Z4LrbqaikJ/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="Solo Levelling gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Solo Levelling
                      </div>
                      <div className="text-white font-normal">
                        An action RPG based on the popular webtoon/anime.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTRxc2ZrcHJlamwyMnQzeXlxZDdxNG80NG13bDJwMDM4eTE1aWwweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/clspXK4twFiGjTwxOZ/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="Spiderman gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Spiderman
                      </div>
                      <div className="text-white font-normal">
                        Swinging through New York City and saving the day!
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZieTFzMmxnemI0dXd4MGozY2gxbHp0MXRiZ2p5ZXFyN3U1aDdyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVwv7I87uB9gZ7avim/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="BGMI gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        BGMI (Battlegrounds Mobile India)
                      </div>
                      <div className="text-white font-normal">
                        A popular mobile battle royale game.
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
          <section className="  pt-10">
            <div className="animeplayer pr-3 pt-3">
              {play ? (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(false)}
                />
              ) : (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  width="40"
                  height="40"
                  className=" cursor-pointer"
                  onClick={() => managePlayer(true)}
                />
              )}
            </div>
            <audio autoPlay loop ref={player}>
              <source src="/valorantring.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex flex-row justify-center items-center rounded-lg ">
              <main className="flex flex-col lg:flex-row  backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl mr-1 ml-1 mt-5 overflow-hidden w-full ">
                <div className="flex-1 p-3">
                  <div className="text-lg text-white mb-4 flex items-center">
                    <div className="md:flex items-cente text0 ">
                      <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
                        Gaming
                      </h1>
                    </div>
                  </div>
                  <div className="pb-4 text-gray-200 font-small dark:text-gray-400">
                    {" "}
                    Playing Games is one of the activities i like to do in my
                    spare time. At present, I play below listed games in my
                    spare time. You can reach out to me if you want to play as a
                    team.
                  </div>{" "}
                  <div className="grid  gap-4 grid-cols-1s xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGVydmVvZ3RwNncxaG5ndW94NjI4bGJybmh5ZXAwa2dwdTZqYjZiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5AQKEZLrP1W8S2WBTA/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="God of War gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        God Of War
                      </div>
                      <div className="text-white font-normal">
                        A critically acclaimed action-adventure game series.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTd2cnJsaDVmaHhpeXZzbDJicjJ2aXhjZzRkazhneTNkNTZ5dG1yNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ySvhFxq6Z4LrbqaikJ/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="Solo Levelling gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Solo Levelling
                      </div>
                      <div className="text-white font-normal">
                        An action RPG based on the popular webtoon/anime.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTRxc2ZrcHJlamwyMnQzeXlxZDdxNG80NG13bDJwMDM4eTE1aWwweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/clspXK4twFiGjTwxOZ/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="Spiderman gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Spiderman
                      </div>
                      <div className="text-white font-normal">
                        Swinging through New York City and saving the day!
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                      <div className="text-white w-full">
                        <img
                          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZieTFzMmxnemI0dXd4MGozY2gxbHp0MXRiZ2p5ZXFyN3U1aDdyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVwv7I87uB9gZ7avim/giphy.gif"
                          width="100%"
                          className="rounded-lg"
                          alt="BGMI gameplay gif"
                        />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        BGMI (Battlegrounds Mobile India)
                      </div>
                      <div className="text-white font-normal">
                        A popular mobile battle royale game.
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

export default Gaming;
