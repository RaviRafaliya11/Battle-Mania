import { connect } from "react-redux";
import { React, useState } from "react";
import UserMainTheme from "../Theme/UserMainTheme";
import { Join_Match } from "./../../../store/Actions/GameAction";
import { user } from "../../../utils/common";
import { useLocation, useHistory } from "react-router-dom";

const ConfirmReservation = ({ dispatch, join_match }) => {
  const location = useLocation();
  const history = useHistory();

  const [inputValues, setInputValues] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setInputValues({
      ...inputValues,
      [evt.target.name]: value,
    });
  }

  const get_team_position_pubgid = location.state.selectedposition.map(
    (data, index) => ({
      team: data.split(/[-]/)[0],
      position: data.split(/[-]/)[1],
      pubg_id: inputValues[index],
    })
  );

  const jsondata = {
    submit: "joinnow",
    match_id: location.state.match_id,
    member_id: user.member_id,
    join_status: location.state.joined,
    teamposition: get_team_position_pubgid,
  };

  function join() {
    dispatch(Join_Match(jsondata));
  }
  console.log(join_match);
  console.log(jsondata);
  return (
    <UserMainTheme back_path={true} title="Joining Position">
      <div className="m-3">
        <div className="flex items-center flex-wrap p-2 shadow-2xl rounded-md bg-white">
          <div className="flex-grow">
            <i
              className="fa fa-google-wallet text-green-900 text-7xl"
              aria-hidden="true"
            ></i>
          </div>

          <div>
            <div className="flex justify-end my-1 text-sm ">
              <p className="mr-2">Your Current Balance :</p>
              <img
                alt="content"
                className="w-5 h-5 mr-1"
                src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
              />
              <span className=" font-semibold">
                {user.wallet_balance + user.join_money}
              </span>
            </div>

            <div className="flex justify-end my-1 text-sm">
              <p className="mr-2">Match entry fee per person's :</p>
              <img
                alt="content"
                className="w-5 h-5 mr-1"
                src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
              />
              <span className=" font-semibold">
                {location.state.match_fees}
              </span>
            </div>

            <div className="flex justify-end my-1 text-sm">
              <p className="mr-2">Total payable Amount :</p>
              <img
                alt="content"
                className="w-5 h-5 mr-1"
                src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
              />
              <span className=" font-semibold">
                {location.state.match_fees *
                  location.state.selectedposition.length}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white my-5">
          <div className="bg-green-900 font-semibold py-1.5 text-white text-center">
            Selected Positions
          </div>
          <table className="bg-gray-700 text-xs md:text-sm text-white table-auto w-full">
            <thead>
              <tr>
                <th className="bg-black bg-opacity-75 p-3 w-auto">#</th>
                <th className="bg-black bg-opacity-75 p-3 w-auto">Team</th>
                <th className="bg-black bg-opacity-75 p-3 w-auto">Position</th>
                <th className="bg-black bg-opacity-75 p-3 w-auto">PUBG Name</th>
              </tr>
            </thead>
            <tbody>
              {location.state.selectedposition.map((data, index) => {
                return (
                  <tr key={index} className="bg-white text-black text-center">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">Team {data.split(/[-]/)[0]}</td>
                    <td className="p-2">{data.split(/[-]/)[1]}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border-b border-gray-300 border-solid focus:outline-none"
                        name={index}
                        value={inputValues.name}
                        onChange={handleChange}
                        placeholder="Enter PUBG Name"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {join_match.message ? (
          <div className="text-sm text-red-500 my-5 text-center">
            {join_match.message}
          </div>
        ) : (
          false
        )}
        <div className="flex items-center justify-evenly">
          <button
            onClick={history.goBack}
            className="bg-red-400 font-semibold py-1.5 px-3 rounded-md text-white"
          >
            Cancel
          </button>
          <button
            onClick={join}
            className="bg-green-900 font-semibold py-1.5 px-3 rounded-md text-white"
          >
            JOIN
          </button>
        </div>
      </div>
    </UserMainTheme>
  );
};

const mapStateToProps = (state) => ({
  join_match: state.join_match.join_match,
});

export default connect(mapStateToProps)(ConfirmReservation);
