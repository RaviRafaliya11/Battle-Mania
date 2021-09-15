import UserMainTheme from "./Theme/UserMainTheme";
import React from "react";

function Lottery() {
  class Tabs extends React.Component {
    state = {
      activeTab: this.props.children[0].props.label,
    };
    changeTab = (tab) => {
      this.setState({ activeTab: tab });
    };
    render() {
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, (child) => {
            buttons.push(child.props.label);
            if (child.props.label === this.state.activeTab)
              content = child.props.children;
          })}

          <TabButtons
            activeTab={this.state.activeTab}
            buttons={buttons}
            changeTab={this.changeTab}
          />
          <div className="tab-content">{content}</div>
        </div>
      );
    }
  }
  const TabButtons = ({ buttons, changeTab, activeTab }) => {
    return (
      <div className="tab-buttons">
        {buttons.map((button) => {
          return (
            <button
              key={button}
              className={button === activeTab ? "active" : ""}
              onClick={() => changeTab(button)}
            >
              {button}
            </button>
          );
        })}
      </div>
    );
  };
  const Tab = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>;
  };

  return (
    <div className="matchtabs">
      <UserMainTheme title="Lottery" back_path={true}>
        <Tabs>
          {/*______________________________Tab 1______________________________*/}
          <Tab label="ONGOING">
            <div className="m-2">
              <div className="shadow-xl border border-gray-400 my-3 rounded bg-white">
                <div
                  className="h-48 bg-top bg-cover flex items-start justify-end"
                  style={{ backgroundImage: `url('images/mainbg.jpg')` }}
                >
                  <div className=" bg-white flex items-center justify-center rounded w-20 mt-2 mr-2">
                    <img
                      alt="content"
                      src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                      className="w-4 h-4 mx-1"
                    />
                    <p className=" pr-2">100</p>
                  </div>
                </div>

                <div className="mx-4 mt-5">
                  <p className="font-semibold text-lg">lottery - Lottery #1</p>
                  <p className="text-red-500 text-sm">
                    2021-01-27 <span>10:00:54</span>
                  </p>
                  <div className="flex flex-wrap mt-1 mb-5 items-center">
                    <div>
                      <p className=" text-xs text-black">75/100</p>

                      <div className=" w-36 md:w-56 bg-gray-400 mt-1 rounded-full">
                        <div
                          className="bg-blue-500 text-xs text-center h-2 rounded-full text-white"
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    <div className="ml-auto mt-3">
                      <button className="flex justify-center items-center bg-green-400 py-1 px-3 rounded text-white">
                        <img
                          alt="content"
                          className="w-5 h-5 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        <span> 100 REGISTRED </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl border border-gray-400 my-3 rounded bg-white">
                <div
                  className="h-48 bg-top bg-cover flex items-start justify-end"
                  style={{ backgroundImage: `url('images/mainbg.jpg')` }}
                >
                  <div className=" bg-white flex items-center justify-center rounded w-20 mt-2 mr-2">
                    <img
                      alt="content"
                      src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                      className="w-4 h-4 mx-1"
                    />
                    <p className=" pr-2">100</p>
                  </div>
                </div>

                <div className="mx-4 mt-5">
                  <p className="font-semibold text-lg">lottery - Lottery #1</p>
                  <p className="text-red-500 text-sm">
                    2021-01-27 <span>10:00:54</span>
                  </p>
                  <div className="flex flex-wrap mt-1 mb-5 items-center">
                    <div>
                      <p className=" text-xs text-black">75/100</p>

                      <div className=" w-36 md:w-56 bg-gray-400 mt-1 rounded-full">
                        <div
                          className="bg-blue-500 text-xs text-center h-2 rounded-full text-white"
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    <div className="ml-auto mt-3">
                      <button className="flex justify-center items-center bg-green-400 py-1 px-3 rounded text-white">
                        <img
                          alt="content"
                          className="w-5 h-5 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        <span> 100 REGISTRED </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab label="RESULTS">
            <div className="m-3">
              <div className="shadow-xl bg-white rounded my-3 flex flex-wrap items-center justify-between p-3">
                <img
                  alt="content"
                  className="md:w-48 rounded mb-2 transition duration-500 ease-in-out transform hover:scale-105"
                  src="images/mainbg.jpg"
                />
                <div className="flex-grow mx-5 mt-3">
                  <p className="font-semibold">Lottery #3</p>
                  <p className="text-sm">
                    Draw On : <span className="ml-1"> 12-Aug-2021</span>
                  </p>
                  <p className="text-sm">
                    Won Prize : <span className="ml-1"> 45645</span>
                  </p>
                  <p className="text-sm">
                    Won By : <span className="ml-1"> UserName</span>
                  </p>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </UserMainTheme>
    </div>
  );
}

export default Lottery;
