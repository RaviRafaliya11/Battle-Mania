import "./customstyle.css";
import Typed from "react-typed";
import React from "react";
import Tournaments from "./Tournaments";
import MainTheme from "./Theme/MainTheme";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Tada from "react-reveal/Tada";
import Slide from "react-reveal/Slide";
import CarouselComponent from "./Carousel";
import TabSection from "./TabSection";

function Home() {
  const data = [
    {
      id: 1,
      image: "images/appimage1.png",
    },
    {
      id: 2,
      image: "images/appimage2.png",
    },
    {
      id: 3,
      image: "images/appimage3.png",
    },
    {
      id: 4,
      image: "images/appimage4.png",
    },
    {
      id: 5,
      image: "images/appimage5.png",
    },
    {
      id: 6,
      image: "images/appimage6.png",
    },
    {
      id: 7,
      image: "images/appimage7.png",
    },
    {
      id: 8,
      image: "images/appimage8.png",
    },
  ];
  return (
    <MainTheme>
      <div>
        {/*______________________________Main Banner______________________________*/}
        <div
          className="bg-top bg-cover"
          style={{ backgroundImage: `url('images/mainbg.jpg')` }}
        >
          <div className="overflow-hidden text-white">
            <div className="my-12">
              <div className="flex flex-wrap items-center xl:justify-start justify-center">
                <div className="order-0 sm:order-1">
                  <Fade right>
                    <img alt="content" src="images/matchimage.png" />
                  </Fade>
                </div>
                <div className="lg:w-1/2 w-full px-10">
                  <Fade top>
                    <div className="mx-10 text-center my-10">
                      <Typed
                        className="MyTypist text-2xl md:text-3xl xl:text-5xl"
                        strings={[
                          "It’s All About Gaming Means BATTLEMANIA App.",
                        ]}
                        typeSpeed={80}
                      />
                      <p className="my-4 font-semibold">
                        Win real cash via playing MOBILE turnaments for free.
                        Get it now!
                      </p>
                      <button
                        id="btn"
                        className="border-2 border-orange-900 border-solid py-3 px-4 rounded-md text-orange-900 hover:text-green-900 hover:ring-green-900 hover:border-green-900"
                      >
                        DOWNLOAD NOW!
                      </button>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*______________________________App Screenshots______________________________*/}
        <div className="text-center pt-20 pb-5">
          <Slide top>
            <p className="text-4xl font-semibold text-gray-800 mb-2">
              APP SCREENSHOTS
            </p>
            <p className="text-gray-700 font-semibold">
              Check the screenshots below to get an idea of the app flaw and the
              features.
            </p>
          </Slide>

          {/*______________________________Carousel______________________________*/}

          <div className="my-10">
            <CarouselComponent data={data} />
          </div>
        </div>

        {/*______________________________Tab Section______________________________*/}
        <TabSection />
        {/*______________________________Tournaments Section______________________________*/}
        <div className="my-8 px-5 md:px-24">
          <Slide top>
            <p className="text-center text-4xl my-8 font-semibold text-gray-800">
              TOURNAMENTS
            </p>
          </Slide>
          <Tournaments />
        </div>
        {/*______________________________Guide Section______________________________*/}
        <div className="bg-navbar-900 text-center text-white pb-10 px-5 md:px-24">
          <Slide top>
            <div className="pt-10">
              <p className="font-semibold text-4xl mb-2">HOW TO PLAY</p>
              <p>Begin Your Game Now</p>
            </div>
          </Slide>

          <div className="mx-5">
            {/*______________________________Tournament 1______________________________*/}
            <div className="overflow-hidden my-10 text-left">
              <div>
                <div className="flex flex-wrap">
                  <LightSpeed left>
                    <div className="md:ml-10 transition duration-500 ease-in-out transform hover:scale-110">
                      <img
                        alt="content"
                        id="shadowimage"
                        className="object-cover object-center m-1"
                        src="images/pubg.jpg"
                      />
                    </div>
                  </LightSpeed>
                  <LightSpeed right>
                    <div className="lg:w-1/2 w-full px-10">
                      <h1 className="text-gray-100 text-3xl title-font font-medium mt-5  xl:mt-12 ">
                        How To Play
                      </h1>
                      <ul className="list-disc text-base font-bold mt-5 ml-5">
                        Solo Mode:
                        <li className="text-sm font-normal">
                          You can join a tournament whatever works for you
                          (modes: Top Position, Most Kills or Damage).
                        </li>
                        <li className="text-sm font-normal">
                          Top 10 winners get prizes up to $50.
                        </li>
                      </ul>
                      <ul className="list-disc text-base font-bold mt-3 ml-5">
                        Duo Mode:
                        <li className="text-sm font-normal">
                          Play PUBG with your friend and you both can win cash
                          prizes.
                        </li>
                        <li className="text-sm font-normal">
                          Just invite your teammate and join 100-team tournament
                        </li>
                        <li className="text-sm font-normal">
                          The top prize is $100. It?s possible to join 3
                          tournaments at once.
                        </li>
                      </ul>
                    </div>
                  </LightSpeed>
                </div>
              </div>
            </div>

            {/*______________________________Tournament 1______________________________*/}
            <div className="overflow-hidden my-10 text-left">
              <div>
                <div className="flex flex-wrap">
                  <LightSpeed right>
                    <div className="md:mr-10 order-0 sm:order-1 transition duration-500 ease-in-out transform hover:scale-110">
                      <img
                        alt="content"
                        id="shadowimage"
                        className="object-cover object-center m-1 "
                        src="images/freefire.jpg"
                      />
                    </div>
                  </LightSpeed>
                  <LightSpeed left>
                    <div className="lg:w-1/2 w-full px-10">
                      <h1 className="text-gray-100 text-3xl title-font font-medium mt-5  xl:mt-12 ">
                        How To Play
                      </h1>
                      <ul className="list-disc text-base font-bold mt-5 ml-5">
                        Solo Mode:
                        <li className="text-sm font-normal">
                          You can join a tournament whatever works for you
                          (modes: Top Position, Most Kills or Damage).
                        </li>
                        <li className="text-sm font-normal">
                          Top 10 winners get prizes up to $50.
                        </li>
                      </ul>
                      <ul className="list-disc text-base font-bold mt-3 ml-5">
                        Duo Mode:
                        <li className="text-sm font-normal">
                          Play PUBG with your friend and you both can win cash
                          prizes.
                        </li>
                        <li className="text-sm font-normal">
                          Just invite your teammate and join 100-team tournament
                        </li>
                        <li className="text-sm font-normal">
                          The top prize is $100. It?s possible to join 3
                          tournaments at once.
                        </li>
                      </ul>
                    </div>
                  </LightSpeed>
                </div>
              </div>
            </div>

            {/*______________________________Tournament 1______________________________*/}
            <div className="overflow-hidden my-10 text-left">
              <div>
                <div className="flex flex-wrap">
                  <LightSpeed left>
                    <div className="md:ml-10 transition duration-500 ease-in-out transform hover:scale-110">
                      <img
                        alt="content"
                        id="shadowimage"
                        className="object-cover object-center m-1"
                        src="images/pubg2.jpg"
                      />
                    </div>
                  </LightSpeed>
                  <LightSpeed right>
                    <div className="lg:w-1/2 w-full px-10">
                      <h1 className="text-gray-100 text-3xl title-font font-medium mt-5  xl:mt-12 ">
                        How To Play
                      </h1>
                      <ul className="list-disc text-base font-bold mt-5 ml-5">
                        Solo Mode:
                        <li className="text-sm font-normal">
                          You can join a tournament whatever works for you
                          (modes: Top Position, Most Kills or Damage).
                        </li>
                        <li className="text-sm font-normal">
                          Top 10 winners get prizes up to $50.
                        </li>
                      </ul>
                      <ul className="list-disc text-base font-bold mt-3 ml-5">
                        Duo Mode:
                        <li className="text-sm font-normal">
                          Play PUBG with your friend and you both can win cash
                          prizes.
                        </li>
                        <li className="text-sm font-normal">
                          Just invite your teammate and join 100-team tournament
                        </li>
                        <li className="text-sm font-normal">
                          The top prize is $100. It?s possible to join 3
                          tournaments at once.
                        </li>
                      </ul>
                    </div>
                  </LightSpeed>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-900 text-center">
          <Tada>
            <button
              id="btn"
              className="border-2 my-4 px-20 font-semibold border-white border-solid py-3 rounded-md text-white hover:text-gray-900 hover:ring-gray-900 hover:border-gray-900"
            >
              DOWNLOAD NOW!
            </button>
          </Tada>
        </div>
      </div>
    </MainTheme>
  );
}

export default Home;
