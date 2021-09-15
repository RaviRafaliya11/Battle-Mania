import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Referral } from "../../../store/Actions/UserActions";
import Loader from "./../../../utils/Loader";

const User_Referral = ({ dispatch, loading, referral }) => {
  useEffect(() => {
    dispatch(Fetch_Referral());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="My Referral" back_path={true}>
        <div className="m-3">
          <div className="m-3">
            {loading ? (
              <div className="flex items-center justify-center mt-52">
                <Loader />
              </div>
            ) : (
              <div>
                <div className="shadow my-3">
                  <div className="bg-green-900 text-center text-white py-2 rounded-t">
                    MY REFERRALS SUMMARY
                  </div>
                  <div className="flex flex-wrap items-center justify-evenly bg-white p-5 text-center">
                    <div className="text-sm">
                      <p>Referrals</p>
                      {!referral.tot_referrals ? (
                        <span>NA</span>
                      ) : (
                        <span className="font-semibold">
                          {referral.tot_referrals.total_ref}
                        </span>
                      )}
                    </div>
                    <div className="text-sm">
                      <p>Earnings</p>
                      <p className="flex items-center justify-center">
                        <img
                          alt="content"
                          className="w-5 h-5 ml-2 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {!referral.tot_earnings ? (
                          <span>NA</span>
                        ) : (
                          <span className="font-semibold">
                            {referral.tot_earnings.total_earning}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-green-900 text-center text-white py-2 rounded-t">
                    MY REFERRALS List
                  </div>
                  <table className="bg-white text-gray-900 w-full shadow-none">
                    <thead>
                      <tr>
                        <th className="bg-gray-800 text-sm font-medium text-white p-2">
                          Date
                        </th>
                        <th className="bg-gray-800 text-sm font-medium text-white p-2">
                          Player Name
                        </th>
                        <th className="bg-gray-800 text-sm font-medium text-white p-2">
                          Status
                        </th>
                      </tr>
                    </thead>

                    {!referral.my_referrals ? (
                      <tbody>
                        <tr>
                          <td>NA</td>
                          <td>NA</td>
                          <td>NA</td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {referral.my_referrals.map((userreferral) => {
                          return (
                            <tr
                              key={userreferral.date}
                              className="text-center text-xs"
                            >
                              <td className="p-2">{userreferral.date}</td>
                              <td className="p-2">{userreferral.user_name}</td>
                              <td className="p-2">{userreferral.status}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.referral.loading,
  referral: state.referral.referral,
});

export default connect(mapStateToProps)(User_Referral);
