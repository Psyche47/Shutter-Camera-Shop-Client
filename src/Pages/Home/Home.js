import React from "react";
import { Container } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Footer from "../../Shared/Footer";
const Home = () => {
  const [products] = useProducts();
  return (
    <div>
      <Banner></Banner>
      <Container>
        <h3 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Products you can order today.
        </h3>
        <div className="d-flex justify-content-between">
          <div className="row">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </Container>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
