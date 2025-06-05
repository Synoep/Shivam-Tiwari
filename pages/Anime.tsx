import { NextPage } from "next";
import Head from "next/head";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";

const Anime: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Animes</title>
        <meta
          name="description"
          content={`My favorite anime series.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Animes"} />
        <meta
          name="description"
          content={`My favorite anime series.`}
        />
        <link rel="canonical" href={"https://www.shivamtiwari.com/anime"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.shivamtiwari.com/anime"} />
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
      <div className="relative min-h-screen flex items-center justify-center">
        {/* No background image for now - will add if requested */}

        {!isTabletOrMobile ? (
          <div className="relative z-10 w-full">
            <main className="backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full shadow-lg m-4 lg:m-6">
              <div className="p-12">
                <div className="text-center">
                  <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
                    Animes
                  </h1>
                  <div className="text-gray-400 dark:text-gray-400 mb-8">
                    List of my favorite anime series.
                  </div>
                  <div className="flex overflow-x-auto gap-4 pb-4">
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazVjeXFxendjMTdkem14MTN0ZnRrZTFscXZtaGcwcXp0cjRhYXd3MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KGd6ns7MR1gPCRT52z/giphy.gif" width="100%" className="rounded-lg" alt="One Piece gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        One Piece
                      </div>
                      <div className="text-white font-normal">
                        A pirate adventure to find the legendary One Piece treasure.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmNza3gycmZqaDAzZms1engxbG9pb2FsYWRvM3JyZ2Z3cjhrM3k4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6yyIrL4JczqfmFRHCl/giphy.gif" width="100%" className="rounded-lg" alt="Dragon Ball Z gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Dragon Ball Z
                      </div>
                      <div className="text-white font-normal">
                        Epic battles and transformations to save the Earth from powerful foes.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWRpa3ZqOWw4aWE2bm5mMG4zMTk5ZHhoaTg1aTlta21lb2JibHpodyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/skVe8kyj61sqS0RlSZ/giphy.gif" width="100%" className="rounded-lg" alt="Naruto gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Naruto
                      </div>
                      <div className="text-white font-normal">
                        A young ninja's journey to gain recognition and become the Hokage.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGRjYmN6dXMwbDBtaHZ4N3Y1MzlnNzd4dW5taXUwaHhnd3k3M2oyNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QfCQQQAI860CXZY9qs/giphy.gif" width="100%" className="rounded-lg" alt="Bleach gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Bleach
                      </div>
                      <div className="text-white font-normal">
                        Soul Reapers fighting against evil spirits to protect the living world.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FtZ3NhN3Z4emxxOTJhcTRuN2VrOGdpYzg2Njc3MXl2eW53bnprdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fB2IRTXd07IkcStfwU/giphy.gif" width="100%" className="rounded-lg" alt="Jujutsu Kaisen gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Jujutsu Kaisen
                      </div>
                      <div className="text-white font-normal">
                        Sorcerers battling curses born from human negativity.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJxamg4dG41dmx2b2cyc3hieDFpbmdpaXBoNG52bGUxN3R0ZTBncyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/327hvHzALPieg2L12n/giphy.gif" width="100%" className="rounded-lg" alt="Black Clover gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Black Clover
                      </div>
                      <div className="text-white font-normal">
                        A magicless boy striving to become the Wizard King in a world of magic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        ) : (
          <div className="relative z-10 p-3 w-full">
            <main className="backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full shadow-lg">
              <div className="p-1">
                <div className="text-center">
                  <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
                    Animes
                  </h1>
                  <div className="text-gray-400 dark:text-gray-400 mb-8">
                    List of my favorite anime series.
                  </div>
                  <div className="flex overflow-x-auto gap-4 pb-4">
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazVjeXFxendjMTdkem14MTN0ZnRrZTFscXZtaGcwcXp0cjRhYXd3MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KGd6ns7MR1gPCRT52z/giphy.gif" width="100%" className="rounded-lg" alt="One Piece gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        One Piece
                      </div>
                      <div className="text-white font-normal">
                        A pirate adventure to find the legendary One Piece treasure.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmNza3gycmZqaDAzZms1engxbG9pb2FsYWRvM3JyZ2Z3cjhrM3k4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6yyIrL4JczqfmFRHCl/giphy.gif" width="100%" className="rounded-lg" alt="Dragon Ball Z gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Dragon Ball Z
                      </div>
                      <div className="text-white font-normal">
                        Epic battles and transformations to save the Earth from powerful foes.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWRpa3ZqOWw4aWE2bm5mMG4zMTk5ZHhoaTg1aTlta21lb2JibHpodyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/skVe8kyj61sqS0RlSZ/giphy.gif" width="100%" className="rounded-lg" alt="Naruto gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Naruto
                      </div>
                      <div className="text-white font-normal">
                        A young ninja's journey to gain recognition and become the Hokage.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGRjYmN6dXMwbDBtaHZ4N3Y1MzlnNzd4dW5taXUwaHhnd3k3M2oyNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QfCQQQAI860CXZY9qs/giphy.gif" width="100%" className="rounded-lg" alt="Bleach gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Bleach
                      </div>
                      <div className="text-white font-normal">
                        Soul Reapers fighting against evil spirits to protect the living world.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FtZ3NhN3Z4emxxOTJhcTRuN2VrOGdpYzg2Njc3MXl2eW53bnprdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fB2IRTXd07IkcStfwU/giphy.gif" width="100%" className="rounded-lg" alt="Jujutsu Kaisen gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Jujutsu Kaisen
                      </div>
                      <div className="text-white font-normal">
                        Sorcerers battling curses born from human negativity.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined min-w-[300px]">
                      <div className="text-white w-full">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJxamg4dG41dmx2b2cyc3hieDFpbmdpaXBoNG52bGUxN3R0ZTBncyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/327hvHzALPieg2L12n/giphy.gif" width="100%" className="rounded-lg" alt="Black Clover gif" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2 mt-4">
                        Black Clover
                      </div>
                      <div className="text-white font-normal">
                        A magicless boy striving to become the Wizard King in a world of magic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </div>
    </Scrollbars>
  );
};

export default Anime; 