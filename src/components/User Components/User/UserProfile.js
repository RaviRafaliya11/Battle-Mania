import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect, useState } from "react";
import { Fetch_User_Profile } from "../../../store/Actions/UserActions";
import { Fetch_Country } from "../../../store/Actions/InformationAction";
import {
  Change_Password,
  Update_Profile,
} from "../../../store/Actions/ServicesActions";
import { user } from "../../../utils/common";
import Loader from "./../../../utils/Loader";

const User_Profile = ({
  dispatch,
  loading,
  change_password_data,
  user_profile,
  update_profile_data,
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

  const [firstname, setFirstName] = useState(user.first_name);
  const [lastname, setLastname] = useState(user.last_name);
  const [mobileno, setMobileNo] = useState(user.mobile_no);
  const [dob, setDob] = useState(`${user.dob} || 01-01-2000`);
  const [gender, setGender] = useState(user.gender);
  const [countrycode, setCountryCode] = useState(`${user.country_code} || +91`);

  let updateprofile_params = {
    member_id: user_profile.member_id,
    first_name: firstname,
    last_name: lastname,
    user_name: user.user_name,
    mobile_no: mobileno,
    email_id: user.email_id,
    dob: dob,
    gender: gender,
    submit: "save",
    member_pass: user.password,
    country_code: countrycode.split(/[.( ]/)[0],
  };

  function updateprofile() {
    dispatch(Update_Profile(updateprofile_params));
  }
  console.log(updateprofile_params);
  console.log(update_profile_data);
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
                      onChange={(e) => setFirstName(e.target.value)}
                      defaultValue={user_profile.first_name}
                      className="bg-transparent border-b-2 border-solid border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                      type="text"
                      placeholder={user_profile.first_name}
                    />
                  </div>

                  <div className="my-1 w-full">
                    <p>Last Name</p>
                    <input
                      onChange={(e) => setLastname(e.target.value)}
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
                    className="bg-transparent border-b-2 border-solid bg-gray-300 border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                    type="text"
                    placeholder="first name"
                    disabled
                  />
                </div>

                <div className="my-3">
                  <p>Email</p>
                  <input
                    defaultValue={user_profile.email_id}
                    className="bg-transparent border-b-2 border-solid bg-gray-300 border-gray-500 my-1.5 focus:outline-none px-1 w-full"
                    type="email"
                    placeholder="email"
                    disabled
                  />
                </div>

                <div className="flex flex-wrap my-3">
                  <div className="my-1 w-full">
                    <p>Country Code</p>
                    <select
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-transparent w-full focus:outline-none border-b-2 border-solid border-gray-500 my-1.5"
                    >
                      <option value="country" selected disabled>
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
                      onChange={(e) => setMobileNo(e.target.value)}
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
                    onChange={(e) => setDob(e.target.value)}
                    defaultValue={
                      user_profile.dob === null
                        ? "2000-01-20"
                        : `${user_profile.dob.split(/[. /]/)[2]}-${
                            user_profile.dob.split(/[. /]/)[1].length === 1
                              ? `0${user_profile.dob.split(/[. /]/)[1]}`
                              : user_profile.dob.split(/[. /]/)[1]
                          }-${
                            user_profile.dob.split(/[. /]/)[0].length === 1
                              ? `0${user_profile.dob.split(/[. /]/)[0]}`
                              : user_profile.dob.split(/[. /]/)[0]
                          }`
                    }
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
                    value="0"
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  <p className="ml-1">Male </p>
                  <input
                    className="ml-5"
                    type="radio"
                    name={user_profile.gender}
                    value="1"
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  <p className="ml-1">Female </p>
                </div>
                {update_profile_data.status ? (
                  <p className="text-green-900">
                    {update_profile_data.message}
                  </p>
                ) : (
                  <p className="text-red-500">{update_profile_data.message}</p>
                )}
                <button
                  onClick={updateprofile}
                  className="bg-green-900 w-full py-1.5 rounded-md text-white "
                >
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
  update_profile_data: state.update_profile_data.update_profile_data,
  country: state.country.country,
});

export default connect(mapStateToProps)(User_Profile);
