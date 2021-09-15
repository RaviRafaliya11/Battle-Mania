import { Link } from "react-router-dom";
import MainTheme from "./Theme/MainTheme";
import { connect } from "react-redux";
import { React, useEffect, useState } from "react";
import { Fetch_Country } from "../../store/Actions/InformationAction";
import { Register_Function } from "../../store/Actions/ServicesActions";

const SignUp = ({ dispatch, country, register_data }) => {
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [country_code, setCountry_code] = useState("");
  const [promo_code, setPromo_code] = useState("");

  useEffect(() => {
    dispatch(Fetch_Country());
  }, [dispatch]);

  let register_params = {
    user_name: user_name,
    password: password,
    cpassword: cpassword,
    mobile_no: mobile_no,
    email_id: email_id,
    country_code: country_code,
    promo_code: promo_code,
    submit: "register",
  };

  function registeruser() {
    dispatch(Register_Function(register_params));
  }

  console.log(register_data);
  return (
    <div>
      <MainTheme>
        <div>
          <div
            className="bg-top bg-cover h-80 flex items-center justify-center"
            style={{ backgroundImage: `url('images/signupbg.jpg')` }}
          >
            <div className="text-center text-black font-bold text-4xl ">
              SIGN UP
            </div>
          </div>

          <div className="flex  justify-center py-10 bg-gray-200">
            <div className="bg-white w-full mx-5 md:w-1/2 text-sm ring-1 rounded-md ring-gray-400">
              <div className="mx-5 my-5">
                <p className="my-1">User Name *</p>
                <input
                  onChange={(e) => setUser_name(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="text"
                  placeholder="Enter Username"
                />

                <p className="my-1">Country Code *</p>
                <select
                  onChange={(e) => setCountry_code(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                >
                  <option value="country" disabled>
                    Choose Your Country
                  </option>
                  {country.map((item) => {
                    return (
                      <option key={item.country_id}>
                        {item.p_code} ({item.country_name})
                      </option>
                    );
                  })}
                </select>

                <p className="mt-4">Mobile No*</p>
                <input
                  onChange={(e) => setMobile_no(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="number"
                  placeholder="Enter Phone"
                />

                <p className="mt-4">Email Address*</p>
                <input
                  onChange={(e) => setEmail_id(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="email"
                  placeholder="Enter Email"
                />

                <p className="my-1">Promo Code</p>
                <input
                  onChange={(e) => setPromo_code(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="text"
                  placeholder="Enter Promo Code"
                />

                <p className="mt-4">Password *</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="password"
                  placeholder="Enter Password"
                />

                <p className="mt-4">Confirm Password *</p>
                <input
                  onChange={(e) => setCpassword(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3 mb-3"
                  type="password"
                  placeholder="Confirm Password"
                />

                <p className="text-red-500 text-center mb-3">
                  {register_data.message}
                </p>

                <button
                  onClick={registeruser}
                  className="w-full bg-orange-900 text-white text-xl py-2 rounded-md mt-4 transform transition hover:scale-105 duration-500"
                >
                  Submit
                </button>

                <p className="text-center my-3 ">
                  You have an Account ?{" "}
                  <Link to="/login">
                    <span className="text-orange-900 cursor-pointer hover:text-green-500 hover:underline">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  register_data: state.register_data.register_data,
  change_password_data: state.change_password_data.change_password_data,
  country: state.country.country,
});

export default connect(mapStateToProps)(SignUp);
