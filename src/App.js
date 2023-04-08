import { Route, Routes } from "react-router-dom";
import Eateries from "./screens/Eateries";
import Orders from "./screens/Orders";
import MyOrders from "./screens/MyOrders";
import ContactUs from "./screens/ContactUs";
import PDCReviews from "./screens/PDCReviews";
import Menu1 from "./screens/Menu1";
import EachEateryContactUs from "./screens/EachEateryContactUs";


function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Eateries />} />
          <Route path="/eateries" element={<Eateries />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/pdcreviews" element={<PDCReviews />} />
          <Route path="/eacheaterycontactus" element={<EachEateryContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;




