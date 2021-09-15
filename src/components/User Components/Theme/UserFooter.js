import { Link } from "react-router-dom";
import { IoGameController, IoPersonSharp } from "react-icons/io5";

function UserFooter() {
  return (
    <div className="bg-blue-500 px-10 flex items-center justify-between py-2 md:rounded-b-xl sticky bottom-0 md:bottom-2">
      <Link to="/refer">
        <div className="flex-col text-center">
          <img
            alt="content"
            className="w-5 h-5 mx-auto"
            src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
          />
          <p className="text-sm md:text-xl text-yellow-400">Earn</p>
        </div>
      </Link>

      <Link to="/play">
        <div className="flex-col text-center">
          <IoGameController className="w-6 h-6 mx-auto text-white" />
          <p className="text-white text-sm md:text-xl">Play</p>
        </div>
      </Link>

      <Link to="/account">
        <div className="flex-col text-center text-black">
          <IoPersonSharp className="w-6 h-6 mx-auto" />
          <p className="text-sm md:text-xl">Account</p>
        </div>
      </Link>
    </div>
  );
}

export default UserFooter;
