import { connect } from "react-redux";
import { React, useEffect, useState } from "react";
import { Fetch_Payment_Method } from "../../../store/Actions/ServicesActions";
import UserMainTheme from "./../Theme/UserMainTheme";
import { Link } from "react-router-dom";

const AddMoney = ({ dispatch, payment_method }) => {
  const [amount, setAmount] = useState(150);
  const [Selectedpaymentmethod, setSelectedPaymentMethod] = useState();

  useEffect(() => {
    dispatch(Fetch_Payment_Method());
  }, [dispatch]);

  return (
    <UserMainTheme title="Add Money" back_path={true}>
      <div className="m-5">
        <p className="flex items-center">
          Amount (
          <img
            alt="content"
            className="w-5 h-5"
            src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
          />
          )
        </p>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          defaultValue="150"
          className="w-full border-b-2 border-solid border-gray-500 bg-transparent my-5 focus:outline-none pb-1"
          placeholder="Amount should be more than 10"
        />
        <p>Add Money:</p>
        <div className="m-5">
          {payment_method.map((data) => {
            return (
              <div className="flex items-center my-1" key={data.payment_name}>
                <input
                  className="w-4 h-4"
                  type="radio"
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  name="addmoney"
                  value={data.payment_name}
                />
                <p className="ml-5">{data.payment_name}</p>
              </div>
            );
          })}
        </div>

        {amount > 10 ? (
          <div>
            {Selectedpaymentmethod === undefined ? (
              <p className="text-red-500 text-center">
                Please Select Payment Method.
              </p>
            ) : (
              <Link
                to={{
                  pathname: `${Selectedpaymentmethod}`,
                  state: { finalamount: `${amount}` },
                }}
              >
                <button className="bg-green-900 rounded w-full py-1.5 text-white uppercase">
                  Add Money
                </button>
              </Link>
            )}
          </div>
        ) : (
          <p className="text-red-500 text-center">
            Your Amount is {amount || 0} Rs. , add{" "}
            <span className="font-semibold text-black">
              {11 - amount || 11} Rs.
            </span>{" "}
            To Countinue.
          </p>
        )}
      </div>
    </UserMainTheme>
  );
};

const mapStateToProps = (state) => ({
  loading: state.payment_method.loading,
  payment_method: state.payment_method.payment_method,
});

export default connect(mapStateToProps)(AddMoney);
