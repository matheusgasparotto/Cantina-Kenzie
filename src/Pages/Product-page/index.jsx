import { Col, Row } from "antd";
import React from "react";
import { Route } from "react-router-dom";

import ProductButton from "../../Components/ProductButton";

const ProductPage = ({ products }) => {
  const productKeys = Object.keys(products);

  const productButtons = (key) => {
    return (
      <Col span={5}>
        <ProductButton product={products[key]} />
      </Col>
    );
  };

  return productKeys.map((key) => (
    <Route>
      <Row justify="space-between" gutter={24}>
        {productButtons(key)}
      </Row>
    </Route>
  ));
};
export default ProductPage;
