import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import ReactDOM from "react-dom";
import { Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppleOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { products } from "./data/fruits/fruits";
import Product from "./Pages/Product-page";
import { useHistory } from "react-router-dom";

const App = () => {
  const productsURL = useHistory();
  const [collapsed, setColapsed] = useState(false);

  const toggleColapsed = () => {
    setColapsed(!collapsed);
  };

  return (
    <div className="App">
      <div className="menu">
        <Button type="primary" onClick={toggleColapsed} className="Button">
          {React.createElement(
            collapsed ? MenuFoldOutlined : MenuUnfoldOutlined
          )}
        </Button>
        <Menu
          defaultSelectedKeys={productsURL === '/bests'? ["1"] : ["2"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<AppleOutlined />}>
            <Link to="/saudaveis">Saudáveis</Link>
            {productsURL.push('bests')}
          </Menu.Item>
          <Menu.Item key="2" icon={<StarOutlined />}>
            <Link to="/bests">Melhores comidas</Link>
          </Menu.Item>
        </Menu>
      </div>
      <Switch>
        <Product products={products} History={productsURL} />
      </Switch>
    </div>
  );
};

export default App;
