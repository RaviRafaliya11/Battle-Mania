import CarouselComponent from "./Carousel";
import MainTheme from "./Theme/MainTheme";

function Install_Guide() {
  const data = [
    {
      id: 1,
      image: "images/hti1.png",
    },
    {
      id: 2,
      image: "images/hti2.png",
    },
    {
      id: 3,
      image: "images/hti3.png",
    },
    {
      id: 4,
      image: "images/hti4.png",
    },
    {
      id: 5,
      image: "images/hti5.png",
    },
    {
      id: 6,
      image: "images/hti6.png",
    },
    {
      id: 7,
      image: "images/hti7.png",
    },
  ];

  return (
    <MainTheme>
      <div>
        <div
          className="bg-top bg-cover h-80 flex items-center justify-center"
          style={{
            backgroundImage: `url('https://demowebapp.thebattlemania.com/uploads/page_banner/202001220705541667563654__Main.jpg')`,
          }}
        >
          <div className="text-center text-white font-bold text-4xl ">
            HOW TO INSTALL
          </div>
        </div>
        <div className="text-center mt-10 my-5">
          <p className="text-4xl font-bold text-white">
            HOW TO INSTALL BATTELEGAME APP?
          </p>
          <p className="text-white font-semibold my-2">
            Check the screenshots below to get an idea of the app flaw and the
            features.
          </p>
        </div>

        <div className="my-10">
          <CarouselComponent data={data} />
        </div>
      </div>
    </MainTheme>
  );
}

export default Install_Guide;
