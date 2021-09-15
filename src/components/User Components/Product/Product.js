import SingleProduct from "./SingleProduct";
import UserMainTheme from "./../Theme/UserMainTheme";

function Product() {
  return (
    <div>
      <UserMainTheme title="Shop Now" back_path={true}>
        <div className="flex gap-5 justify-center flex-wrap mt-5 ">
          {" "}
          <SingleProduct />
          <SingleProduct /> <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </UserMainTheme>
    </div>
  );
}

export default Product;
