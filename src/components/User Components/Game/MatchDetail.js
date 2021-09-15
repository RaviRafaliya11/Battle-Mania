import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Fetch_Single_Game,
  Fetch_Participants,
} from "../../../store/Actions/GameAction";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Match_Detail = ({ dispatch, singlegame, participants }) => {
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    dispatch(Fetch_Single_Game(id));
  }, []);

  function fetchparticipants() {
    dispatch(Fetch_Participants(id));
  }

  var desc = { __html: singlegame.match_desc };
  return (
    <UserMainTheme back_path={true} title={location.state.title}>
      <div className="m-3">
        <img className="h-56 w-full" src={location.state.image} alt="content" />
        <Tabs>
          <TabList className="flex bg-blue-500 text-white">
            <Tab className="p-2 w-full text-center bg-transparent">
              DESCRIPTION
            </Tab>
            <Tab
              onClick={fetchparticipants}
              className="p-2 w-full text-center bg-transparent"
            >
              {" "}
              JOINED MEMBER
            </Tab>
          </TabList>

          <TabPanel>
            <div className="m-3">
              <div className="my-5">
                <p className="font-semibold text-green-400 text-lg">
                  {singlegame.match_name} -Match #{singlegame.m_id}
                </p>
                <div className="m-3">
                  <div className="flex flex-wrap gap-3 flex-auto text-sm">
                    <div className="bg-white rounded shadow-xl px-2 py-1">
                      Team:{" "}
                      <span className="font-semibold">{singlegame.type}</span>
                    </div>
                    <div className="bg-white rounded shadow-xl px-2 py-1 flex">
                      Entry Fee:{" "}
                      <span className="font-semibold flex">
                        <img
                          alt="content"
                          className="w-5 h-5 mx-1.5"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {singlegame.entry_fee}
                      </span>
                    </div>
                    <div className="bg-white rounded shadow-xl px-2 py-1">
                      Mode:{" "}
                      <span className="font-semibold">
                        {singlegame.version}
                      </span>
                    </div>
                    <div className="bg-white rounded shadow-xl px-2 py-1">
                      Match Type:{" "}
                      <span className="font-semibold">
                        {singlegame.match_type}
                      </span>
                    </div>
                    <div className="bg-white rounded shadow-xl px-2 py-1">
                      MAP:{" "}
                      <span className="font-semibold">{singlegame.MAP}</span>
                    </div>
                    <div className="bg-white rounded shadow-xl px-2 py-1">
                      Match Schedule:{" "}
                      <span className="font-semibold">
                        {singlegame.match_time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <p className="font-semibold text-green-400 text-lg">
                  Prize Details
                </p>
                <div className="m-3">
                  <div className="flex flex-wrap gap-3 flex-auto text-sm">
                    <div className="bg-white rounded shadow-xl px-2 py-1 flex">
                      Winning Prize:{" "}
                      <span className="font-semibold flex">
                        <img
                          alt="content"
                          className="w-5 h-5 mx-1.5"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {singlegame.win_prize}
                      </span>
                    </div>
                    <div className="bg-white rounded shadow-xl px-2 py-1 flex">
                      Per Kill:{" "}
                      <span className="font-semibold flex">
                        <img
                          alt="content"
                          className="w-5 h-5 mx-1.5"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {singlegame.per_kill}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <p className="font-semibold text-green-400 text-lg">
                  Match Sponser
                </p>
                <p className="ml-3 text-sm">{singlegame.match_sponsor}ds</p>
              </div>

              <div className="my-5">
                <p className="font-semibold text-green-400 text-lg">
                  About This Match
                </p>
                <p className="ml-3 text-sm" dangerouslySetInnerHTML={desc}></p>
              </div>

              {singlegame.join_status ? (
                <button className="w-full p-2 text-white font-semibold rounded bg-red-400">
                  JOINED ALREADY
                </button>
              ) : (
                <button className="w-full p-2 text-white font-semibold rounded bg-green-400">
                  JOIN NOW
                </button>
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="m-3 divide-y divide-black">
              {participants.map((data, index) => {
                return (
                  <div key={index} className="px-3 py-1">
                    {index + 1}.{" "}
                    <span className="ml-5 font-semibold">{data.pubg_id}</span>
                  </div>
                );
              })}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </UserMainTheme>
  );
};

const mapStateToProps = (state) => ({
  loading: state.singlegame.loading,
  singlegame: state.singlegame.singlegame,
  participants: state.participants.participants,
});

export default connect(mapStateToProps)(Match_Detail);
