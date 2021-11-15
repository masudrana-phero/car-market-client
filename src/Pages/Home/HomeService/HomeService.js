import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";

const HomeService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://polar-chamber-55517.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const showProducts = products.slice(0, 6);

  return (
    <Container>
      <h1 className="text-center fw-bold my-5">Our Products</h1>
      <Row>
        {showProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default HomeService;
