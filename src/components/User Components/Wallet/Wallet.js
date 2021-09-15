import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import {
  Fetch_Wallet_Transaction,
  Fetch_Dashboard,
} from "../../../store/Actions/UserActions";
import { Link } from "react-router-dom";
import Loader from "./../../../utils/Loader";

const Wallet = ({ dispatch, loading, dashboard, wallet_transaction }) => {
  useEffect(() => {
    dispatch(Fetch_Wallet_Transaction());
    dispatch(Fetch_Dashboard());
  }, [dispatch]);
  console.log(wallet_transaction);

  return (
    <div>
      <UserMainTheme title="Wallet" back_path={true}>
        <div className="m-3">
          <div className="bg-green-400 text-center text-white p-0.5 rounded-md my-3">
            Total Balance
            <div className="flex flex-wrap items-center justify-between bg-green-900">
              <div className="m-5 text-black">
                <div className="flex items-center my-2">
                  <img
                    alt="content"
                    className="w-5 h-5 mr-2"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />
                  {!dashboard.member ? (
                    <p>NA</p>
                  ) : (
                    <p className="font-semibold">
                      {dashboard.member.join_money +
                        dashboard.member.wallet_balance}
                    </p>
                  )}
                </div>
                <div className="flex items-center my-1 text-sm">
                  <p className="mr-2">Win Money:</p>
                  <img
                    alt="content"
                    className="w-5 h-5 mr-2"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />
                  {!dashboard.tot_win ? (
                    <p>NA</p>
                  ) : (
                    <p>{dashboard.tot_win.total_win}</p>
                  )}
                </div>
                <div className="flex items-center my-1 text-sm">
                  <p className="mr-2">Join Money:</p>
                  <img
                    alt="content"
                    className="w-5 h-5 mr-2"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />
                  {!dashboard.member ? (
                    <p>NA</p>
                  ) : (
                    <p>{dashboard.member.join_money}</p>
                  )}
                </div>
              </div>
              <div className="mx-auto">
                <Link to="/addmoney">
                  <button className="bg-red-400 w-32 px-5 rounded py-0.5 my-1">
                    ADD
                  </button>
                </Link>
                <br />
                <Link to="/withdraw">
                  <button className="bg-red-400 w-32 px-5 rounded py-0.5 my-1">
                    WITHDRAW
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 justify-center items-center text-center">
            <div className="bg-green-400 flex-grow rounded-md pt-2 pb-1 my-2 text-white">
              Earnings
              <div className="flex items-center justify-center bg-green-900 py-4 text-black">
                <img
                  alt="content"
                  className="w-5 h-5 mr-2"
                  src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                />
                {!dashboard.tot_win ? (
                  <p>NA</p>
                ) : (
                  <p>{dashboard.tot_win.total_win}</p>
                )}
              </div>
            </div>

            <div className="bg-green-400 flex-grow rounded-md pt-2 pb-1 my-2 text-white">
              Payouts
              <div className="flex items-center justify-center bg-green-900 py-4 text-black">
                <img
                  alt="content"
                  className="w-5 h-5 mr-2"
                  src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                />
                {!dashboard.tot_withdraw ? (
                  <p>NA</p>
                ) : (
                  <p>{dashboard.tot_withdraw.tot_withdraw}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center font-semibold text-black text-xl my-5">
          Wallet History
        </p>

        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-10">
              <Loader />
            </div>
          ) : (
            <div>
              {wallet_transaction.map((item) => {
                return (
                  <div key={item.transaction_id}>
                    {item.withdraw > 0 ? (
                      <div className="grid items-center bg-white overflow-hidden grid-cols-3 grid-rows-1 gap-2 text-sm px-3 py-2 my-3 border-2 border-solid rounded-xl shadow-lg mx-1">
                        <div className="box">
                          <div className="text-red-500">DEBIT</div>
                        </div>
                        <div className="box">
                          <p>
                            {item.note}- <span>#{item.transaction_id}</span>
                          </p>
                          <p>{item.date}</p>
                        </div>
                        <div className="box">
                          <p className="flex items-center justify-end text-red-500">
                            -
                            <img
                              alt="content"
                              className="w-5 h-5 mx-1"
                              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                            />
                            <span> {item.withdraw}</span>
                          </p>
                          <p className="flex items-center justify-end">
                            <img
                              alt="content"
                              className="w-5 h-5 mx-1"
                              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                            />
                            <span className="text-blue-500">
                              {item.join_money + item.win_money}
                            </span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid items-center bg-white overflow-hidden grid-cols-3 grid-rows-1 gap-2 text-sm px-3 py-2 my-3 border-2 border-solid rounded-xl shadow-lg mx-1">
                        <div className="box">
                          <div className="text-green-500">CREDIT</div>
                        </div>
                        <div className="box">
                          <p>
                            {item.note}- <span>#{item.transaction_id}</span>
                          </p>
                          <p>{item.date}</p>
                        </div>
                        <div className="box">
                          <p className="flex items-center justify-end text-green-500">
                            +
                            <img
                              alt="content"
                              className="w-5 h-5 mx-1"
                              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                            />
                            <span>{item.deposit}</span>
                          </p>
                          <p className="flex items-center justify-end">
                            <img
                              alt="content"
                              className="w-5 h-5 mx-1"
                              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                            />
                            <span className="text-blue-500">
                              {item.join_money + item.win_money}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.wallet_transaction.loading,
  wallet_transaction: state.wallet_transaction.wallet_transaction,
  dashboard: state.dashboard.dashboard,
});

export default connect(mapStateToProps)(Wallet);
