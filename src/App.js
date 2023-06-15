import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/components/Home/Home"
import Category from "../src/components/Category/Category"
import SingleProduct from "../src/components/SingleProduct/SingleProduct"
import Header from "../src/components/Header/Header"
import Newsletter from "../src/components/Footer/Newsletter/Newsletter"
import Footer from "../src/components/Footer/Footer"
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<SingleProduct />} />
                    </Routes>
                    <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    )
}

export default App;
