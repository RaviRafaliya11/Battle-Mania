import UserMainTheme from "./../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Statistics } from "../../../store/Actions/UserActions";
import Loader from "./../../../utils/Loader";

const User_Orders = ({ dispatch, loading, statistics }) => {
  useEffect(() => {
    dispatch(Fetch_Statistics());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="My Statistics" back_path={true}>
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-52">
              <Loader />
            </div>
          ) : (
            <div>
              <table className="bg-white text-gray-900 w-full shadow-none text-sm">
                <thead>
                  <tr>
                    <th className=" bg-green-900 text-white py-2 ">#</th>
                    <th className=" bg-green-900 text-white py-2 ">
                      Match Info
                    </th>
                    <th className=" bg-green-900 text-white py-2 ">Paid</th>
                    <th className=" bg-green-900 text-white py-2 ">Won</th>
                  </tr>
                </thead>

                <tbody>
                  {statistics.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-solid border-b border-black"
                      >
                        <td className="text-center p-2">{index + 1}</td>
                        <td className="text-center p-2">
                          <div>
                            <p>{item.match_name}</p>
                            <p>#{item.m_id}</p>
                            <p>{item.match_time}</p>
                          </div>
                        </td>
                        <td className="text-center p-2">
                          <p className="flex items-center">
                            <img
                              alt="content"
                              className="w-5 h-5 ml-2 mr-1"
                              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                            />
                            {item.paid}
                          </p>
                        </td>
                        <td className="text-center p-2">
                          <p className="flex items-center">
                            <img
                              alt="content"
                              className="w-5 h-5 ml-2 mr-1"
                              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                            />
                            {item.won}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.statistics.loading,
  statistics: state.statistics.statistics,
  hasErrors: state.statistics.hasErrors,
});

export default connect(mapStateToProps)(User_Orders);
