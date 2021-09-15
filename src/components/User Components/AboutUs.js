import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_About_Us } from "../../store/Actions/InformationAction";
import Loader from "./../../utils/Loader";

const About_US = ({ dispatch, about_us, loading }) => {
  useEffect(() => {
    dispatch(Fetch_About_Us());
  }, [dispatch]);

  var about_us_formatted = { __html: about_us.aboutus };

  return (
    <div>
      <UserMainTheme title="About Us" back_path={true}>
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-10">
              <Loader />
            </div>
          ) : (
            <div
              className="m-3"
              dangerouslySetInnerHTML={about_us_formatted}
            ></div>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.about_us.loading,
  about_us: state.about_us.about_us,
});

export default connect(mapStateToProps)(About_US);
