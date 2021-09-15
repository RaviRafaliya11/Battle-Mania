import UserMainTheme from "../Theme/UserMainTheme";

function WithDraw() {
  return (
    <UserMainTheme title="Withdraw" back_path={true}>
      <div className="m-5 text-sm">
        <p className="flex items-center">Mobile No:</p>
        <input
          type="number"
          className="w-full border-b-2 border-solid border-gray-500 bg-transparent mt-1 mb-3 focus:outline-none pb-1"
        />

        <p className="flex items-center mt-5">
          Amount (
          <img
            alt="content"
            className="w-5 h-5"
            src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
          />
          )
        </p>
        <input
          type="number"
          className="w-full border-b-2 border-solid border-gray-500 bg-transparent mt-1 mb-3 focus:outline-none pb-1"
        />

        <p className="mt-5">Withdraw to:</p>
        <div className="m-5">
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">Google Pay</p>
          </div>
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">PayPal</p>
          </div>
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">20</p>
          </div>
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">PayStack</p>
          </div>
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">Instamojo</p>
          </div>
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">RazroPay</p>
          </div>
          <div className="flex items-center my-1">
            <input className="w-4 h-4" type="radio" name="addmoney" />
            <p className="ml-5">CashFree</p>
          </div>
        </div>
        <button className="bg-green-900 rounded w-full py-1.5 text-white uppercase">
          Withdraw Money
        </button>
        <p className="text-red-500 text-center mt-3">
          <span className="font-semibold">Note :</span> You can only withdraw
          from win money
        </p>
      </div>
    </UserMainTheme>
  );
}

export default WithDraw;
