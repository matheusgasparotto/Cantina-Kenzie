import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const ProductButton = (props) => {
  return (
    <Card hoverable cover={<img alt="example" src={props.product.img} />}>
      <Meta title={props.product.name} description={props.product.price} />
    </Card>
  );
};

export default ProductButton;
