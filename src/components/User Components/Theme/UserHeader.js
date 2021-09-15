import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Dashboard } from "../../../store/Actions/UserActions";
import { useHistory } from "react-router-dom";

const Wallet = ({ dispatch, dashboard, back_path, title }) => {
  useEffect(() => {
    dispatch(Fetch_Dashboard());
  }, [dispatch]);
  let path = useHistory();

  return (
    <div className="bg-blue-500 md:px-8 flex items-center py-3 md:rounded-t-xl sticky top-0 md:top-2 z-10">
      <p className="text-white mx-2 text-base md:text-2xl  font-semibold flex items-center capitalize">
        {back_path ? (
          <button onClick={path.goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          ""
        )}

        {title}
      </p>
      <div className="ml-auto px-2 flex items-center bg-white rounded text-xs md:text-lg">
        <img
          alt="content"
          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
          className="w-3 h-3 md:w-5 md:h-5 mx-2"
        />
        {dashboard.member ? (
          <span>
            {dashboard.member.join_money + dashboard.member.wallet_balance}
          </span>
        ) : (
          "NA"
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.dashboard,
});

export default connect(mapStateToProps)(Wallet);
