import UserMainTheme from "./Theme/UserMainTheme";

function App_Tutorial() {
  return (
    <UserMainTheme title="App Tutorial" back_path={true}>
      <div className="m-3">
        <p className="font-semibold">How To Use</p>
        <iframe
          title="video"
          className="w-full xl:h-80 my-3"
          src="https://www.youtube.com/embed/l7Fbqpc3NYY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a href="https://www.youtube.com/embed/l7Fbqpc3NYY">
          <button className="py-1 bg-green-900 w-full text-white font-medium rounded">
            PLAY IN YOUTUBE
          </button>
        </a>
      </div>
    </UserMainTheme>
  );
}

export default App_Tutorial;
