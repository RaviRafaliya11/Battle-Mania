import UserMainTheme from "../Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Order } from "../../../store/Actions/UserActions";
import Loader from "./../../../utils/Loader";

const User_Orders = ({ dispatch, loading, order }) => {
  useEffect(() => {
    dispatch(Fetch_Order());
  }, [dispatch]);

  console.log(order);

  return (
    <div>
      <UserMainTheme title="My Orders" back_path={true}>
        <div className="m-3">
          {loading ? (
            <div className="flex items-center justify-center mt-52">
              <Loader />
            </div>
          ) : (
            <div>
              {order.map((order) => {
                return (
                  <div
                    key={order.orders_id}
                    className="shadow-xl bg-white rounded my-3 flex flex-wrap items-center justify-between p-3"
                  >
                    <img
                      alt="content"
                      className="md:w-48 rounded mb-2"
                      src={order.product_image}
                    />
                    <div className="flex-grow mx-5">
                      <p className="font-semibold">{order.order_no}</p>
                      <p className="flex text-sm mt-1 items-center">
                        Price:
                        <img
                          alt="content"
                          className="w-5 h-5 ml-2 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {order.product_price}
                      </p>
                      <p className="text-sm">
                        Date :{" "}
                        <span className="ml-1">{order.created_date}</span>
                      </p>
                      <p className="text-sm">
                        status :{" "}
                        <span className="ml-1">{order.order_status}</span>
                      </p>
                    </div>
                  </div>
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
  loading: state.order.loading,
  order: state.order.order,
});

export default connect(mapStateToProps)(User_Orders);
