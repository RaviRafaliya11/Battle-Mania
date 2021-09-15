import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Fetch_Ongoing_Games,
  Fetch_Upcoming_Games,
  Fetch__Game_Result,
} from "../../../store/Actions/GameAction";
import OngoingTab from "./game_components/OngoingTab";
import UpcomingTab from "./game_components/UpcomingTab";
import ResultTab from "./game_components/ResultTab";

const All_Games_Details = ({
  dispatch,
  upcoming_games,
  game_result,
  ongoing_games,
}) => {
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    dispatch(Fetch_Ongoing_Games(id));
  }, []);

  function upcoming() {
    dispatch(Fetch_Upcoming_Games(id));
    console.log(upcoming_games);
  }

  function result() {
    dispatch(Fetch__Game_Result(id));
  }
  return (
    <UserMainTheme back_path={true} title={location.state.title}>
      <Tabs>
        <TabList className="flex bg-blue-500 justify-evenly font-semibold">
          <Tab className="w-full text-center p-3 mt-2">ONGOING</Tab>
          <Tab onClick={upcoming} className="w-full text-center p-3 mt-2">
            UPCOMING
          </Tab>
          <Tab onClick={result} className="w-full text-center p-3 mt-2">
            RESULTS
          </Tab>
        </TabList>

        <TabPanel>
          <div className="m-3">
            <OngoingTab data={ongoing_games} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="m-3">
            <UpcomingTab data={upcoming_games} />
          </div>
        </TabPanel>

        <TabPanel>
          <ResultTab data={game_result} />
        </TabPanel>
      </Tabs>
    </UserMainTheme>
  );
};

const mapStateToProps = (state) => ({
  loading: state.upcoming_games.loading,
  upcoming_games: state.upcoming_games.upcoming_games,
  game_result: state.game_result.game_result,
  ongoing_games: state.ongoing_games.ongoing_games,
});

export default connect(mapStateToProps)(All_Games_Details);
