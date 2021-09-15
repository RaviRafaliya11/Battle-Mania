import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Terms_Condition } from "../../store/Actions/InformationAction";
import Loader from "./../../utils/Loader";

const Terms_Condition = ({ dispatch, terms_conditions, loading }) => {
  useEffect(() => {
    dispatch(Fetch_Terms_Condition());
  }, [dispatch]);

  var terms_conditions_formatted = {
    __html: terms_conditions.terms_conditions,
  };

  return (
    <div>
      <UserMainTheme title="Terms & Condition" back_path={true}>
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-10">
              <Loader />
            </div>
          ) : (
            <div
              className="m-3"
              dangerouslySetInnerHTML={terms_conditions_formatted}
            ></div>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.terms_conditions.loading,
  terms_conditions: state.terms_conditions.terms_conditions,
});

export default connect(mapStateToProps)(Terms_Condition);
