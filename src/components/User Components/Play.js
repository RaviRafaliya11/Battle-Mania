import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Slider } from "../../store/Actions/BannerActions";
import { Fetch_Announcement } from "../../store/Actions/AnnouncementAction";
import { Link } from "react-router-dom";
import UserMainTheme from "./Theme/UserMainTheme";
import AllGames from "./Game/AllGames";
import Bounce from "react-reveal/Bounce";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdNotificationsActive } from "react-icons/md";

const Play = ({ dispatch, slider, announcement }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(Fetch_Slider());
    dispatch(Fetch_Announcement());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="All Games">
        <Link to="/announcement">
          <div className="h-1" />
          <div className="m-2 flex items-center h-14 rounded bg-orange-900 text-white">
            <div className="flex-grow">
              <p className="ml-3 text-sm py-1 font-semibold">Announcement:</p>
              {announcement.slice(-1).map((ann) => {
                return (
                  <Bounce top key={ann.announcement_desc}>
                    <p className="ml-3 text-sm py-1">{ann.announcement_desc}</p>
                  </Bounce>
                );
              })}
            </div>
            <div>
              <MdNotificationsActive className="mx-3 w-6 h-6 animate-pulse" />
            </div>
          </div>
        </Link>

        <Carousel
          infinite={true}
          showDots={true}
          responsive={responsive}
          className="m-2"
        >
          {slider.map((item, index) => {
            return (
              <img
                key={index}
                alt="content"
                className="w-full"
                src={item.slider_image}
              />
            );
          })}
        </Carousel>

        <div className="mt-2 mx-2 rounded-md">
          <AllGames />
          <div className="h-4" />
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  slider: state.slider.slider,
  announcement: state.announcement.announcement,
});

export default connect(mapStateToProps)(Play);
