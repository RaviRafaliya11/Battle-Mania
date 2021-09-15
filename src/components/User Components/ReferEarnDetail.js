import UserMainTheme from "./Theme/UserMainTheme";

function ReferEarnDetail() {
  return (
    <div>
      <UserMainTheme title="Earn More" back_path={true}>
        <div className="text-center">
          <p className="text-green-900 text-2xl font-semibold my-3">
            REFER MORE TO EARN MORE
          </p>
          <p className="mx-10 text-sm">
            invite your friends on App using your Referral Code to Earn 10 When
            they join First Paid match, with minimum match fee of 20. Your
            friends also get 5 as Signup Bonus!
          </p>
          <p className="text-green-900 mt-8">YOUR REFERRAL CODE</p>
          <p className="text-2xl font-semibold my-2">dhsakj</p>
          <img
            alt="content"
            src="https://demowebapp.thebattlemania.com/application/views/themes/front/bmuserapp/images/how_refer_earn.jpg"
            className=" mt-10"
          />
        </div>
      </UserMainTheme>
    </div>
  );
}

export default ReferEarnDetail;
