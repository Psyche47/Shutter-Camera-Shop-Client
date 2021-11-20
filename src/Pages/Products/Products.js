import React from "react";
import { Container, Spinner } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import Footer from "../../Shared/Footer";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();
  const count = products.length;
  return (
    <div>
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container>
          <h5 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
            All of Our Products
          </h5>
          <div className="d-flex justify-content-between">
            <div className="row">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </Container>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Products;
