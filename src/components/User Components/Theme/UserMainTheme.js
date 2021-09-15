import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

function UserMainTheme(props) {
  return (
    <div
      className="flex justify-center h-screen"
      style={{
        backgroundImage: `url('https://demowebapp.thebattlemania.com/uploads/page_banner/202001220705541667563654__Main.jpg')`,
      }}
    >
      <div className="md:h-5" />
      <div className="md:mx-5 w-screen md:w-auto xl:w-5/12">
        <UserHeader title={props.title} back_path={props.back_path} />

        <div className="h-screen md:h-xl bg-gray-200 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl ">
          {props.children}
        </div>

        <UserFooter />
      </div>
      <div className="md:h-3" />
    </div>
  );
}

export default UserMainTheme;
