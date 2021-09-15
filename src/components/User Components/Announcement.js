import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Announcement } from "../../store/Actions/AnnouncementAction";
import Loader from "./../../utils/Loader";

const Announcement = ({ dispatch, loading, announcement }) => {
  useEffect(() => {
    dispatch(Fetch_Announcement());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="Announcement" back_path={true}>
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-52">
              <Loader />
            </div>
          ) : (
            <div className="m-3">
              {announcement.map((item) => (
                <div
                  key={item.announcement_id}
                  className="shadow-xl bg-white rounded my-3 px-2 py-1"
                >
                  {item.announcement_desc}
                </div>
              ))}
            </div>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.announcement.loading,
  announcement: state.announcement.announcement,
});

export default connect(mapStateToProps)(Announcement);
