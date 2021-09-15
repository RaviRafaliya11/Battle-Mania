import Header from "./Header";
import Footer from "./Footer";

function MainTheme(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default MainTheme;
