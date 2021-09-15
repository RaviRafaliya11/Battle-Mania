import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute ";

// Main Components

import Home from "./components/Main Components/Home";
import SignUp from "./components/Main Components/SignUp";
import InstallGuide from "./components/Main Components/InstallGuide";
import AboutUS from "./components/Main Components/AboutUS";
import PrivacyPolicy from "./components/Main Components/PrivacyPolicy";
import TermsConditions from "./components/Main Components/TermsConditions";
import Contact from "./components/Main Components/Contact";
import Login from "./components/Main Components/Login";

// User Components
import ReferEarn from "./components/User Components/ReferEarn";
import Account from "./components/User Components/Account";
import Lottery from "./components/User Components/Lottery";
import Product from "./components/User Components/Product/Product";
import ReferEarnDetail from "./components/User Components/ReferEarnDetail";
import Play from "./components/User Components/Play";
import Announcement from "./components/User Components/Announcement";
import UserProfile from "./components/User Components/User/UserProfile";
import Wallet from "./components/User Components/Wallet/Wallet";
import WithDraw from "./components/User Components/Wallet/WithDraw";
import AddMoney from "./components/User Components/Wallet/AddMoney";
import UserMatches from "./components/User Components/User/UserMatches";
import UserOrders from "./components/User Components/User/UserOrders";
import UserStatistics from "./components/User Components/User/UserStatistics";
import UserReferral from "./components/User Components/User/UserReferral";
import LeaderBoard from "./components/User Components/LeaderBoard";
import TermsCondition from "./components/User Components/TermsCondition";
import AppTutorial from "./components/User Components/AppTutorial";
import CustomerSupport from "./components/User Components/CustomerSupport";
import AboutUs from "./components/User Components/AboutUs";
import TopPlayers from "./components/User Components/TopPlayers";
import AP from "./components/User Components/AP";
import SelectPosition from "./components/User Components/Game/SelectPosition";
import AllGamesDetails from "./components/User Components/Game/AllGamesDetails";
import MatchDetail from "./components/User Components/Game/MatchDetail";
import ConfirmReservation from "./components/User Components/Game/ConfirmReservation";
import ResultTabDetail from "./components/User Components/Game/game_components/ResultTabDetail";
import Paystack from "./Payments/Paystack";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ap" component={AP} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/installguide" component={InstallGuide} />
        <Route exact path="/about" component={AboutUS} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/terms" component={TermsConditions} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

        {/* Private Routes */}
        <PrivateRoute exact path="/play" component={Play} />
        <PrivateRoute exact path="/refer" component={ReferEarn} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/lottery" component={Lottery} />
        <PrivateRoute exact path="/product" component={Product} />
        <PrivateRoute exact path="/refer_detail" component={ReferEarnDetail} />
        <PrivateRoute exact path="/announcement" component={Announcement} />
        <PrivateRoute exact path="/profile" component={UserProfile} />
        <PrivateRoute exact path="/wallet" component={Wallet} />
        <PrivateRoute exact path="/addmoney" component={AddMoney} />
        <PrivateRoute exact path="/withdraw" component={WithDraw} />
        <PrivateRoute exact path="/my_matches" component={UserMatches} />
        <PrivateRoute exact path="/my_orders" component={UserOrders} />
        <PrivateRoute exact path="/my_referrals" component={UserReferral} />
        <PrivateRoute exact path="/my_statistics" component={UserStatistics} />
        <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
        <PrivateRoute exact path="/app_tutorial" component={AppTutorial} />
        <PrivateRoute exact path="/about_us" component={AboutUs} />
        <PrivateRoute exact path="/top_players" component={TopPlayers} />
        <PrivateRoute exact path="/matches/:id" component={AllGamesDetails} />
        <PrivateRoute exact path="/match_detail/:id" component={MatchDetail} />
        <PrivateRoute exact path="/Paystack" component={Paystack} />

        <PrivateRoute
          exact
          path="/customer_support"
          component={CustomerSupport}
        />
        <PrivateRoute
          exact
          path="/terms_condition"
          component={TermsCondition}
        />
        <PrivateRoute
          exact
          path="/game_result/:id"
          component={ResultTabDetail}
        />
        <PrivateRoute
          exact
          path="/select_position/:id"
          component={SelectPosition}
        />
        <PrivateRoute
          exact
          path="/confirm_reservation"
          component={ConfirmReservation}
        />
      </Switch>
    </Router>
  );
}

export default App;
