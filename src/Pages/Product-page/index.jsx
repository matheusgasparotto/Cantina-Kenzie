import { Col, Row } from "antd";
import React from "react";
import { Route } from "react-router-dom";

import ProductButton from "../../Components/ProductButton";

const ProductPage = ({ products }) => {
  const productKeys = Object.keys(products);

  const productButtons = (key) => {
    const productsArr = products[key];
    return productsArr.map((product, index) => (
      <Col key={index} span={5}>
        <ProductButton product={product} />
      </Col>
    ));
  };

  return productKeys.map((key, index) => (
    <Route key={index} exact path={`/${key}`}>
      <Row justify="space-between" gutter={24}>
        {productButtons(key)}
      </Row>
    </Route>
  ));
};
export default ProductPage;
