import React, { useEffect, useState } from "react";
import { DownIcon, RightIcon } from "../../SVG/IconsSVG";
import SidePanelSubLink from "./SidePanelSubLink";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

interface IProps {
  closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = (props: any) => {
  const [aboutClose, setAboutClose] = useState(false);
  const [projectsClose, setProjectsClose] = useState(false);
  const [contactClose, setcontactClose] = useState(false);
  const [miscClose, setMiscClose] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [activeCurrentSubLink, setActiveCurrentSubLink] = useState("");
  useEffect(() => {
    if (!isMounted) return;
    // This code is inefficient and can be written better way, so feel free to raise a PR to the original Repository as your open source contribution
    let currentSubLink = window.location.href.split("/").pop();
    if (currentSubLink === "Experience") {
      setActiveCurrentSubLink("experience.css");
    } else if (currentSubLink === "Skills") {
      setActiveCurrentSubLink("skills.js");
    } else if (currentSubLink === "Projects") {
      setActiveCurrentSubLink("Projects.ts");
    } else if (currentSubLink === "Achievements") {
      setActiveCurrentSubLink("Achievements.ts");
    } else if (currentSubLink === "1") {
      setActiveCurrentSubLink("1");
    } else if (currentSubLink === "2") {
      setActiveCurrentSubLink("2");
    } else if (currentSubLink === "3") {
      setActiveCurrentSubLink("3");
    } else if (currentSubLink === "4") {
      setActiveCurrentSubLink("4");
    } else if (currentSubLink === "5") {
      setActiveCurrentSubLink("5");
    } else if (currentSubLink === "6") {
      setActiveCurrentSubLink("6");
    } else if (currentSubLink === "") {
      setActiveCurrentSubLink("index.html");
    } else if (currentSubLink === "Hobbies") {
      setActiveCurrentSubLink("Hobbies.tsx");
    } else if (currentSubLink === "Blogs") {
      setActiveCurrentSubLink("Blogs");
    } else if (currentSubLink === "Email") {
      setActiveCurrentSubLink("Email");
    } else if (currentSubLink === "Gaming") {
      setActiveCurrentSubLink("Gaming.tsx");
    } else if (currentSubLink === "Anime") {
      setActiveCurrentSubLink("Anime.tsx");
    } else if (currentSubLink === "Learning") {
      setActiveCurrentSubLink("Learning");
    } else if (currentSubLink === "Startup") {
      setActiveCurrentSubLink("Startup");
    } else if (currentSubLink === "0") {
      setActiveCurrentSubLink("0");
    }
  }, [isMounted]);

  return (
    <div className="menu-option overflow-hidden">
      <h5 className="myweight ">EXPLORER</h5>
      <div
        className="mb-5 pb-5 z-1 scrollbar "
        style={{ height: "84%", overflowY: "scroll" }}
      >
        <div className="menu-drop">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setAboutClose(!aboutClose)}
            >
              <div className="myweight flex-min topPadd">
                {!aboutClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="myweight flex-auto">About</span>
            </div>
            {!aboutClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Index.html" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Index.html"
                      link="/"
                      icon={<span className="icons8-html-5"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Experience");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Experience.css" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Experience.css"
                      link="/Experience"
                      icon={<span className="icons8-css3"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Skills");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Skills.js" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Skills.js"
                      link="/Skills"
                      icon={<span className="icons8-javascript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={`smallSide ${
                      activeCurrentSubLink === "Projects.ts" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Projects.ts"
                      link="/Projects"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Achievements");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={`smallSide ${
                      activeCurrentSubLink === "Achievements.ts" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Achievements.ts"
                      link="/Achievements"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="menu-drop pt-1">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setProjectsClose(!projectsClose)}
            >
              <div className="myweight flex-min topPadd">
                {!projectsClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="myweight flex-auto">Projects</span>
            </div>
            {!projectsClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Projects/0");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "0" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="CampusConnect.jsx"
                      link="/Projects/0"
                      icon={<span className="icons8-nodejs"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/1");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "1" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Medisen.js"
                      link="/Projects/1"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/2");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "2" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="DeribitTradingSystem.cpp"
                      link="/Projects/2"
                      icon={<span className="icons8-angularjs"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/3");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "3" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="MultiAgentAISystem.py"
                      link="/Projects/3"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/4");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "4" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="BitcoinHub.tsx"
                      link="/Projects/4"
                      icon={<span className="icons8-nodejs"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="menu-drop pt-1 ">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setcontactClose(!contactClose)}
            >
              <div className="myweight flex-min topPadd">
                {!contactClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="myweight flex-auto">Contact</span>
            </div>
            {!contactClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Email");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Email" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Email.tsx"
                      link="/Email"
                      icon={<span className="icons8-gmail"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="menu-drop pt-1">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setMiscClose(!miscClose)}
            >
              <div className="myweight flex-min topPadd">
                {!miscClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="myweight flex-auto">Misc</span>
            </div>
            {!miscClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Hobbies");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Hobbies.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Hobbies.tsx"
                      link="/Hobbies"
                      icon={<span className="icons8-html-5"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Anime");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Anime.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Anime.tsx"
                      link="/Anime"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Gaming");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Gaming.tsx" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Gaming.tsx"
                      link="/Gaming"
                      icon={<span className="icons8-nodejs"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isTabletOrMobile && (
        <ul className="bottom-links  pl-2">
          <li className="border-b border-solid border-gray-500 ">
            <span className="text-gray-400">All Rights Reserved. </span>
          </li>
          <li>
            <span className="text-gray-400"> Ⓒ Copyright 2025. </span>
          </li>
        </ul>
      )}
    </div>
  );
};
