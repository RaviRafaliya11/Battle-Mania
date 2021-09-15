import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Customer_Support } from "../../store/Actions/InformationAction";

const Customer_Support = ({ dispatch, customer_support }) => {
  useEffect(() => {
    dispatch(Fetch_Customer_Support());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="Customer Support" back_path={true}>
        <div className="m-5">
          <div>
            <div className="mt-3 mb-8 border-b border-black border-solid">
              <p className="text-xl mb-3">Address:</p>
              <p>{customer_support.company_address}</p>
            </div>

            <p className="text-xl">Phone:</p>
            <div className="flex items-center border-b border-black border-solid">
              <p>{customer_support.comapny_phone}</p>
              <i className="fa fa-2x fa-phone text-green-900 text-4xl mx-2 ml-auto"></i>
              <i className="fa fa-whatsapp whatsapp-icon text-green-900 text-4xl mx-2"></i>
            </div>

            <p className="text-xl mt-8">Email:</p>
            <div className="flex items-center border-b border-black border-solid">
              <p>{customer_support.company_email}</p>
              <i className="fa fa-2x fa-envelope text-green-900 text-4xl mx-2 ml-auto"></i>
            </div>

            <p className="text-xl mt-8">Instagram:</p>
            <div className="flex items-center border-b border-black border-solid">
              <a href={customer_support.insta_link}>
                {customer_support.insta_link}
              </a>
              <i className="fa fa-instagram text-green-900 text-4xl mx-2 ml-auto"></i>
            </div>

            <div className="my-8 border-b border-black border-solid">
              <p className="text-xl mb-3">Street:</p>
              <p>{customer_support.company_street}</p>
            </div>

            <div className="mt-8 border-b border-black border-solid">
              <p className="text-xl mb-3">Time:</p>
              <p>{customer_support.company_time}</p>
            </div>
          </div>
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer_support: state.customer_support.customer_support,
});

export default connect(mapStateToProps)(Customer_Support);
