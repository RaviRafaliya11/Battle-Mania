import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function TabSection() {
  return (
    <div className="bg-navbar-900 text-center text-white pb-10 px-5 md:px-24">
      <Slide top>
        <div className="pt-10">
          <p className="font-semibold text-4xl mb-5">FEATURES</p>
          <p>
            Battlemania Application will give you stage to play eSports on
            <br /> your preferred portable games.
          </p>
        </div>
      </Slide>
      <div className="mt-10 homepagetab">
        <Tabs>
          <TabList className="flex justify-evenly text-orange-900 my-10">
            <Tab className="p-3 rounded-b-md text-xl w-full font-semibold cursor-pointer">
              JOIN CONTEST
            </Tab>
            <Tab className="p-3 rounded-b-md text-xl w-full font-semibold cursor-pointer">
              PARTICIPATES
            </Tab>
            <Tab className="p-3 rounded-b-md text-xl w-full font-semibold cursor-pointer">
              CONTEST RULES
            </Tab>
          </TabList>

          <TabPanel>
            <div>
              <Slide right>
                <div>
                  <p className="font-semibold text-2xl mb-5">Join Contest</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </Slide>

              <div className="flex flex-wrap mt-10 justify-center">
                {/*______________________________Left Grid______________________________*/}

                <div className="">
                  <Slide left>
                    <img alt="content" src="images/matchimage.png" />
                  </Slide>
                </div>
                {/*______________________________Right Grid______________________________*/}
                <div className="flex-1 ml-10 mt-5 xl:mt-20">
                  <div className="sm:grid xl:grid-cols-2">
                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">
                            Free Contests
                          </p>
                          <p>
                            You can join any contest of your liking and of your
                            desired time for free as a launch offer.
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">
                            Leader Boards
                          </p>
                          <p>
                            There will be leader boards of all the pro players
                            to see who got the guts and skills at the same time.
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                              clipRule="evenodd"
                            />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">Cash Prizes</p>
                          <p>
                            As a true core gamer you will be competing some of
                            the best players of india and also can win exiting
                            cash prizes.
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">Fair Play</p>
                          <p>
                            With the respect of gaming community we have made
                            some rules for the players. No Emulators, No
                            Hackers.
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">
                            Gamer Profile
                          </p>
                          <p>
                            You'll be given a gamer profile where you can
                            showcase your skills and stats. Be popular in rising
                            gaming community of india.
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">Share & Earn</p>
                          <p>
                            You can Refer Other gamers to play on platform. You
                            will get refer bonus of it.
                          </p>
                        </div>
                      </div>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <div>
                <Slide left>
                  <p className="font-semibold text-2xl mb-5">Participates</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </Slide>
              </div>

              <div className="flex flex-wrap items-center justify-around mt-10">
                {/*______________________________Left______________________________*/}
                <div className="my-5 md:w-1/3">
                  <Fade left>
                    <div className="flex my-10 md:my-10 ">
                      <div className="w-16 md:order-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 bg-orange-900 rounded-full p-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mx-5 text-left">
                        <p className="text-2xl font-semibold">Various Modes</p>
                        <p>
                          We will post daily new contests based on various modes
                          such as Squad,Duo,Solo and also FPP and TPP matches.
                        </p>
                      </div>
                    </div>
                  </Fade>

                  <Fade left>
                    <div className="flex my-10 md:my-10 ">
                      <div className="w-16 md:order-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 bg-orange-900 rounded-full p-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mx-5 text-left">
                        <p className="text-2xl font-semibold">Strict Rules</p>
                        <p>
                          Anytype of misconduct or cheating will not be allowed
                          in all the games so you don't have to worry about fair
                          play.
                        </p>
                      </div>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="flex my-10 md:my-10 ">
                      <div className="w-16 md:order-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 bg-orange-900 rounded-full p-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mx-5 text-left">
                        <p className="text-2xl font-semibold">
                          No Restrictions!{" "}
                        </p>
                        <p>
                          You can play as many free games as you want during the
                          launch offer, So make sure you win that juicy prizes.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>

                {/*______________________________Middle______________________________*/}
                <div className="my-5">
                  <Fade top>
                    <img alt="content" src="images/matchimage.png" />
                  </Fade>
                </div>
                {/*______________________________Right______________________________*/}
                <div className="my-5 md:w-1/3">
                  <Fade right>
                    <div className="flex my-10 md:my-10 ">
                      <div className="w-16">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 bg-orange-900 rounded-full p-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mx-5 text-left">
                        <p className="text-2xl font-semibold">Free Contests</p>
                        <p>
                          You can join any contest of your liking and of your
                          desired time for free as a launch offer.
                        </p>
                      </div>
                    </div>
                  </Fade>

                  <Fade right>
                    <div className="flex my-10 md:my-10 ">
                      <div className="w-16">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 bg-orange-900 rounded-full p-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mx-5 text-left">
                        <p className="text-2xl font-semibold">Kill Prizes</p>
                        <p>
                          In kill prizes match you will get prizes of decided
                          per kill prize at the time of declaration.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <div>
                <Slide right>
                  <p className="font-semibold text-2xl mb-5">Contest Results</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </Slide>
              </div>

              <div className="flex flex-wrap mt-10 justify-center">
                {/*______________________________Right Grid______________________________*/}

                <div className="order-2">
                  <Slide right>
                    <img alt="content" src="images/matchimage.png" />
                  </Slide>
                </div>
                {/*______________________________Left Grid______________________________*/}
                <div className="flex-1 ml-10 mt-5 xl:mt-20">
                  <div className="sm:grid xl:grid-cols-2">
                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                              clipRule="evenodd"
                            />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">Big Prizes</p>
                          <p>
                            All Winning Prizes will be given in just 30 minutes
                            of match completion and you can also make withdraw
                            requests of prize whenever you want.
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">
                            Community Support
                          </p>
                          <p>
                            We also provide community support to our players via
                            email and WhatsApp too for better experience of
                            tournaments incase anything goes wrong!
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">Notification</p>
                          <p>
                            You'll be notified by the app once the results are
                            available. You'll be also notified about the
                            winnings of yours
                          </p>
                        </div>
                      </div>
                    </Zoom>

                    <Zoom bottom>
                      <div className="flex my-10 md:my-5">
                        <div className="w-16">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 bg-orange-900 rounded-full p-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mx-5 text-left">
                          <p className="text-2xl font-semibold">
                            Fast Withdraw
                          </p>
                          <p>
                            We will process withdrawal request in 24 hours of
                            submission.
                          </p>
                        </div>
                      </div>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
