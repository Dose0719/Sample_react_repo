import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./component/navigation/NavigationBar";
import Banner from "./component/navigation/Banners";
import image1 from "../src/image/c6.jpg"
import image2 from "../src/image/c2.jpg"
import image3 from "../src/image/c3.jpg"
import image4 from "../src/image/c4.jpg"
import image5 from "../src/image/c5.jpg"
import GridItems from "./component/navigation/GridItems";
import Footer from "./component/navigation/Footer"

function App(){
  return(
    <>  
    <NavigationBar></NavigationBar>
    <Banner></Banner>
    <div className="bg-dark p-5">
      <div className="container">
        <h1 className="text-warning">Top 5 shoes</h1>
      </div>
      <div className="row">
        
          <GridItems name="Nike" imageFile={image1} desc="lorem potek omsim"></GridItems>
          <GridItems name="Nike" imageFile={image2} desc="lorem ang asim nila"></GridItems>
          <GridItems name="Nike" imageFile={image3} desc="lorem hoty eya nnnascsd"></GridItems>
          <GridItems name="Nike" imageFile={image4} desc="lorem ni9ce nice aso nn"></GridItems>
          <GridItems name="Nike" imageFile={image5} desc="lannuuy yubas ynasdasd"></GridItems>
        
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
export default App;