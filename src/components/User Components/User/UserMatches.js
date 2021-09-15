import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Fetch_User_Matches } from "../../../store/Actions/UserActions";
import OngoingTab from "./../Game/game_components/OngoingTab";
import UpcomingTab from "./../Game/game_components/UpcomingTab";
import ResultTab from "./../Game/game_components/ResultTab";

const UserMatches = ({ dispatch, user_matches }) => {
  const { id } = useParams();

  function get_upcoming(event) {
    return event.match_status === "1";
  }
  var upcomingdata = user_matches.filter(get_upcoming);

  function get_result(event) {
    return event.match_status === "2";
  }
  var resultdata = user_matches.filter(get_result);

  function get_ongoing(event) {
    return event.match_status === "3";
  }
  var ongoingdata = user_matches.filter(get_ongoing);

  useEffect(() => {
    dispatch(Fetch_User_Matches(id));
  }, [dispatch]);

  return (
    <UserMainTheme back_path={true} title="My Matches">
      <Tabs>
        <TabList className="flex bg-blue-500 justify-evenly font-semibold">
          <Tab className="w-full text-center p-3 mt-2">ONGOING</Tab>
          <Tab className="w-full text-center p-3 mt-2">UPCOMING</Tab>
          <Tab className="w-full text-center p-3 mt-2">RESULTS</Tab>
        </TabList>

        <TabPanel>
          <div className="m-3">
            <OngoingTab data={ongoingdata} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="m-3">
            <UpcomingTab data={upcomingdata} />
          </div>
        </TabPanel>

        <TabPanel>
          <ResultTab data={resultdata} />
        </TabPanel>
      </Tabs>
    </UserMainTheme>
  );
};

const mapStateToProps = (state) => ({
  user_matches: state.user_matches.user_matches,
});

export default connect(mapStateToProps)(UserMatches);
