import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Dashboard } from "../../store/Actions/UserActions";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import {
  FaAngleRight,
  FaUserCircle,
  FaGoogleWallet,
  FaGamepad,
  FaShoppingBag,
  FaChartBar,
  FaChartArea,
  FaUsers,
  FaBullhorn,
  FaInfoCircle,
  FaQuestionCircle,
  FaFileAlt,
  FaHeadset,
  FaTrophy,
  FaPowerOff,
} from "react-icons/fa";

const Account = ({ dispatch, dashboard }) => {
  useEffect(() => {
    dispatch(Fetch_Dashboard());
  }, [dispatch]);

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <div>
      <UserMainTheme title="Me">
        <div className="bg-blue-500 flex flex-wrap items-center text-white pb-24">
          <img
            alt="content"
            className="w-20 h-20 rounded ml-16 bg-white p-3"
            src="https://demowebapp.thebattlemania.com/uploads/company_favicon/thumb/100x100_202101191156431658741203__fevicon.png"
          />
          <div className="ml-8">
            <p className="my-4 text-xl">
              Username:
              <span className="ml-3 capitalize">
                {dashboard.member ? (
                  <span>{dashboard.member.user_name}</span>
                ) : (
                  "Me"
                )}
              </span>
            </p>
            <p className="my-4 text-xl flex items-center">
              Balance:{" "}
              <img
                alt="content"
                className="w-5 h-5 ml-3 mr-1"
                src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
              />
              {dashboard.member ? (
                <span>
                  {dashboard.member.join_money +
                    dashboard.member.wallet_balance}
                </span>
              ) : (
                "NA"
              )}
            </p>
          </div>
        </div>

        <Flip bottom>
          <div className="bg-green-900 -mt-12 flex justify-center items-center mx-2 md:mx-10 rounded text-white shadow-2xl">
            <Zoom top>
              <div className="p-5 text-center my-3 border-r-2 border-solid border-white text-sm w-1/3">
                {!dashboard.tot_match_play ? (
                  <span>NA</span>
                ) : (
                  <span>{dashboard.tot_match_play.total_match || "NA"}</span>
                )}
                <p>Matches Played</p>
              </div>
            </Zoom>

            <Zoom bottom>
              <div className="p-5 text-center my-3 border-r-2 border-solid border-white text-sm w-1/3">
                {!dashboard.tot_kill ? (
                  <span>NA</span>
                ) : (
                  <span>{dashboard.tot_kill.total_kill || "NA"}</span>
                )}
                <p>Total Killed</p>
              </div>
            </Zoom>

            <Zoom top>
              <div className="p-5 text-center my-3 text-sm w-1/3">
                <p className="flex items-center justify-center">
                  <img
                    alt="content"
                    className="w-5 h-5 mr-1"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />

                  {!dashboard.tot_win ? (
                    <span>NA</span>
                  ) : (
                    <span>{dashboard.tot_win.total_win || "NA"}</span>
                  )}
                </p>
                <p>Amount Won</p>
              </div>
            </Zoom>
          </div>
        </Flip>

        <div className="mx-3 my-5 bg-white rounded-md py-2 md:text-xl">
          <Link to="/profile">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaUserCircle className="w-8 h-8 ml-8 text-green-900" />
                <p className="ml-5">My Profile</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/wallet">
            <Slide right>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaGoogleWallet className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">My Wallet</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/my_matches">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaGamepad className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">My Matches</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/my_orders">
            <Slide right>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaShoppingBag className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">My Orders</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/my_statistics">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaChartBar className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">My Statistics</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/my_referrals">
            <Slide right>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaUsers className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">My Referrals</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/announcement">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaBullhorn className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">My Announcement</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/top_players">
            <Slide right>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaTrophy className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">Top Players</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="leaderboard">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaChartArea className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">Leader Board</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/app_tutorial">
            <Slide right>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaInfoCircle className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">App Tutorial</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/about_us">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaQuestionCircle className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">About Us</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/customer_support">
            <Slide right>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaHeadset className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">Customer Support </p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Link to="/terms_condition">
            <Slide left>
              <div className="flex items-center py-2.5 border-b border-solid border-gray-300">
                <FaFileAlt className="w-8 h-8 ml-8 text-green-900" />

                <p className="ml-5">Terms & Conditions</p>
                <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
              </div>
            </Slide>
          </Link>

          <Slide right>
            <div
              onClick={logout}
              className="flex items-center py-2.5 border-b border-solid border-gray-300 cursor-pointer"
            >
              <FaPowerOff className="w-8 h-8 ml-8 text-green-900" />

              <p className="ml-5">Log Out</p>
              <FaAngleRight className="ml-auto mr-5 w-7 h-7 text-gray-800" />
            </div>
          </Slide>
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.dashboard,
});

export default connect(mapStateToProps)(Account);
