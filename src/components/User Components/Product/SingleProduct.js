function SingleProduct() {
  return (
    <div>
      <img
        alt="content"
        className="w-56 h-48"
        src="https://demowebapp.thebattlemania.com/uploads/product_image/thumb/253x90_202106051719081650004148__20210520_193533.jpg"
      />
      <div className="my-1 ">
        <p className="font-semibold">Product Title</p>
        <div className="flex">
          <div className="flex">
            <img
              alt="content"
              className="w-5 h-5 mr-1"
              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
            />
            <p className="line-through text-blue-600">200</p>
          </div>

          <div className="flex ml-auto">
            <img
              alt="content"
              className="w-5 h-5 mr-1"
              src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
            />
            <p className=" text-blue-600">1200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
