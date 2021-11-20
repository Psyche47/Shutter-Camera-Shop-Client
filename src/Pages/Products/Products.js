import React from "react";
import { Container } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();
  return (
    <div>
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
    </div>
  );
};

export default Products;
