import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import UserMainTheme from "./../components/User Components/Theme/UserMainTheme";
import { useLocation } from "react-router-dom";
import { BASE_URL, token } from "../utils/common";
import Loader from "../utils/Loader";

function Paystack() {
  let location = useLocation();
  console.log(location);

  const [loading, setLoading] = useState(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: location.state.finalamount,
    publicKey: "pk_test_8f464c248133b87bb189fd31a2443dd541eef118",
  };

  const handlePaystackSuccessAction = (reference) => {
    setLoading(true);
    console.log(reference);
    let input_params = {
      reference: reference.trxref,
      amount: location.state.finalamount,
    };
    fetch(`${BASE_URL}/paystack_response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input_params),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          window.location.href = "/wallet";
        },

        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: `Pay Now`,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <UserMainTheme back_path={true}>
      <div className="m-10 flex flex-col items-center justify-center">
        <div>
          <img
            alt=""
            className="mb-10 h-12"
            src="https://cyberomin.github.io/assets/article_images/paystack/logo.png"
          />
        </div>
        {loading ? (
          <>
            <div className="text-lg text-red-500 font-semibold">
              Please Do not Leave or Referesh the Page
            </div>
            <div className="text-sm my-5 text-center">
              Your Payment is Under Process.
              <p>We are confirming your payment with Paystack.</p>
            </div>
            <Loader />

            <div className="my-5 text-xs">
              Hang in there! You will be redirected to your Wallet in a minute.
            </div>
          </>
        ) : (
          <>
            <div className="my-5 font-semibold tex-lg text-center">
              Total Amount is:{" "}
              <p className="font-extrabold mt-5">
                {location.state.finalamount}
              </p>
            </div>
            <PaystackButton
              className="bg-green-900 text-lg p-2.5 rounded-lg text-black font-semibold hover:text-white"
              {...componentProps}
            />
          </>
        )}
      </div>
    </UserMainTheme>
  );
}

export default Paystack;
