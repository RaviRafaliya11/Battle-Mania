import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fetch_Refer_Images } from "../../store/Actions/BannerActions";
import Loader from "./../../utils/Loader";
import Flip from "react-reveal/Flip";

const ReferEarn = ({ dispatch, loading, refer_images }) => {
  useEffect(() => {
    dispatch(Fetch_Refer_Images());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="Refer & Earn">
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-52">
              <Loader />
            </div>
          ) : (
            <div>
              {refer_images.map((item) => {
                return (
                  <Flip top key={item.banner_id}>
                    <div className="my-5 mx-3">
                      <Link to={item.banner_title}>
                        <img
                          alt="content"
                          className=" w-full"
                          src={item.banner_image}
                        />
                      </Link>
                    </div>
                  </Flip>
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
  loading: state.refer_images.loading,
  refer_images: state.refer_images.refer_images,
});

export default connect(mapStateToProps)(ReferEarn);
