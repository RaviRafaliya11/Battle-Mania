import { connect } from "react-redux";
import { React, useState } from "react";
import { Loginfunction } from "../../store/Actions/ServicesActions";
import MainTheme from "./Theme/MainTheme";
import { Link } from "react-router-dom";

const Login = ({ dispatch, loading, logindata }) => {
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");

  let login_params = {
    user_name: user_name,
    password: password,
    submit: "login",
  };

  function loginfetch(e) {
    e.preventDefault();
    dispatch(Loginfunction(login_params));
  }
  return (
    <MainTheme>
      <div>
        <div
          className="bg-top bg-cover h-80 flex items-center justify-center"
          style={{ backgroundImage: `url('images/signupbg.jpg')` }}
        >
          <div className="text-center text-black font-bold text-4xl ">
            LOGIN
          </div>
        </div>

        <div className="flex  justify-center py-10 bg-gray-200">
          <div className="bg-white mx-5 w-full md:w-1/3 text-sm ring-1 rounded-md ring-gray-400">
            {logindata ? (
              <p className="text-red-500 text-center mt-2">{logindata.title}</p>
            ) : (
              ""
            )}
            <form onSubmit={loginfetch}>
              <div className="mx-5 my-5">
                <p className="my-1">User Name *</p>
                <input
                  onChange={(e) => setUser_name(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="text"
                  placeholder="Enter Username"
                />

                <p className="mt-4">Password *</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 ring-1 ring-gray-400 rounded-md my-1 px-3"
                  type="password"
                  placeholder="Enter Password"
                />
                <div className="text-red-500 my-2 text-sm">
                  {logindata ? <p>{logindata.message}</p> : ""}
                </div>
                <p className="mt-4 text-sm">
                  Forgot Password?
                  <Link to="/signup">
                    <span className="text-orange-900 ml-1 cursor-pointer hover:text-green-400 hover:underline">
                      Reset Now
                    </span>
                  </Link>
                </p>

                <input
                  type="submit"
                  value="Submit"
                  className="w-full bg-orange-900 text-white text-xl py-2 rounded-md mt-4 cursor-pointer transform transition hover:scale-105 duration-500"
                />

                <button className="w-full ring-1 ring-gray-500 text-base py-2 rounded-md mt-4 transform transition hover:scale-105 duration-500">
                  Login With Google
                </button>
                <button className="w-full bg-blue-600 text-white text-base py-2 rounded-md mt-4 transform transition hover:scale-105 duration-500">
                  Login With Facebook
                </button>
                <p className="text-center my-3 text-sm">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="text-orange-900 cursor-pointer">
                      Sing Up
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainTheme>
  );
};

const mapStateToProps = (state) => ({
  logindata: state.logindata.logindata,
  loading: state.logindata.loading,
});

export default connect(mapStateToProps)(Login);
