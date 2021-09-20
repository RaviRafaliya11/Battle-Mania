import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Dashboard } from "../../../store/Actions/UserActions";
import { useHistory } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Wallet = ({ dispatch, dashboard, back_path, title }) => {
  useEffect(() => {
    dispatch(Fetch_Dashboard());
  }, [dispatch]);
  let path = useHistory();
  console.log(dashboard);
  return (
    <div className="bg-blue-500 md:px-8 flex items-center py-3 md:rounded-t-xl">
      <p className="text-white mx-2 text-base md:text-2xl font-semibold flex items-center capitalize">
        {back_path ? (
          <button onClick={path.goBack}>
            <FaLongArrowAltLeft className="w-8 h-8 mr-2 text-white" />
          </button>
        ) : (
          ""
        )}

        {title}
      </p>
      <div className="ml-auto mx-2 flex items-center bg-white rounded text-xs md:text-lg">
        <img
          alt="content"
          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
          className="w-3 h-3 md:w-5 md:h-5 mx-1"
        />
        {dashboard.member ? (
          <span className="pr-1">
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
