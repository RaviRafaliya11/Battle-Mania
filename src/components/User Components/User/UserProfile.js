import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect, useState } from "react";
import { Fetch_User_Profile } from "../../../store/Actions/UserActions";
import { Fetch_Country } from "../../../store/Actions/InformationAction";
import { Change_Password } from "../../../store/Actions/ServicesActions";
import { user } from "../../../utils/common";
import Loader from "./../../../utils/Loader";

const User_Profile = ({
  dispatch,
  loading,
  change_password_data,
  user_profile,
  country,
}) => {
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");

  useEffect(() => {
    dispatch(Fetch_User_Profile());
    dispatch(Fetch_Country());
  }, [dispatch]);

  let changepass_parms = {
    oldpass: oldpassword,
    newpass: newpassword,
    confpass: cnfpassword,
    submit: "reset",
    member_id: user.member_id,
  };

  function changepassword() {
    dispatch(Change_Password(changepass_parms));
  }

  console.log(change_password_data);

  return (
    <div>
      <UserMainTheme title="My Profile" back_path={true}>
        <div className="m-3">
          {loading ? (
            <div className="flex items-center justify-center mt-52">
              <Loader />
            </div>
          ) : (
            <div className="m-2 text-sm">
              <p className="font-semibold text-xl">Edit Profile</p>
              <div className="mx-3 my-5">
                <div className="flex flex-wrap mb-5">
                  <div className="my-1 w-full">
                    <p>First Name</p>
                    <input
                      defaultValue={user_profile.first_name}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="text"
                      placeholder={user_profile.first_name}
                    />
                  </div>

                  <div className="my-1 w-full">
                    <p>Last Name</p>
                    <input
                      defaultValue={user_profile.last_name}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <p>User Name</p>
                  <input
                    defaultValue={user_profile.user_name}
                    className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                    type="text"
                    placeholder="first name"
                  />
                </div>

                <div className="my-3">
                  <p>Email</p>
                  <input
                    defaultValue={user_profile.email_id}
                    className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                    type="email"
                    placeholder="email"
                  />
                </div>

                <div className="flex flex-wrap my-3">
                  <div className="my-1 w-full">
                    <p>Country Code</p>
                    <select className="bg-transparent w-full focus:outline-none border-b-2 border-solid border-gray-500 my-1.5">
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
                  </div>

                  <div className="my-1 w-full">
                    <p>Mobile No</p>
                    <input
                      defaultValue={user_profile.mobile_no}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="number"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <p>Birth Date</p>
                  <input
                    className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                    type="date"
                  />
                </div>

                <div className="flex flex-wrap user_profile-center my-3">
                  <p>Gender</p>
                  <input
                    className="ml-5"
                    type="radio"
                    name={user_profile.gender}
                  />{" "}
                  <p className="ml-1">Male </p>
                  <input
                    className="ml-5"
                    type="radio"
                    name={user_profile.gender}
                  />{" "}
                  <p className="ml-1">Female </p>
                </div>
                <button className="bg-green-900 w-full py-1.5 rounded-md text-white ">
                  UPDATE PROFILE
                </button>
              </div>

              <div className="m-2">
                <p className="font-semibold text-xl">Change Password</p>

                <div className="mx-3 my-5">
                  <div className="my-3">
                    <p>Old Password</p>
                    <input
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="password"
                      placeholder="first name"
                    />
                  </div>

                  <div className="my-3">
                    <p>New Password</p>
                    <input
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="password"
                      placeholder="first name"
                    />
                  </div>

                  <div className="my-3">
                    <p>Confirm Password</p>
                    <input
                      onChange={(e) => setCnfPassword(e.target.value)}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="password"
                      placeholder="first name"
                    />
                  </div>

                  {!change_password_data.status ? (
                    <p className="text-red-500 text-center mb-3">
                      {change_password_data.message}
                    </p>
                  ) : (
                    <p className="text-green-500 text-center mb-3">
                      {change_password_data.message}
                    </p>
                  )}
                  <button
                    onClick={changepassword}
                    className="bg-green-900 w-full py-1.5 rounded-md text-white mb-5"
                  >
                    Reset Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.user_profile.loading,
  user_profile: state.user_profile.user_profile,
  change_password_data: state.change_password_data.change_password_data,
  country: state.country.country,
});

export default connect(mapStateToProps)(User_Profile);
