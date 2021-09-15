import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

function UserMainTheme(props) {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url('https://demowebapp.thebattlemania.com/uploads/page_banner/202001220705541667563654__Main.jpg')`,
      }}
    >
      <div className="flex flex-col h-screen mx-auto max-w-xl rounded-xl">
        <div className="md:h-3" />
        <UserHeader title={props.title} back_path={props.back_path} />
        <div className="flex-1 bg-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl ">
          {props.children}
        </div>
        <UserFooter />
        <div className="md:h-3" />
      </div>
    </div>
  );
}

export default UserMainTheme;
