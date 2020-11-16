import "./App.css";
import React from "react";
import { Switch, Link } from "react-router-dom";
import { useState } from "react";
import "antd/dist/antd.css";
import { Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppleOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { products } from "./data/fruits/fruits";
import Product from "./Pages/Product-page";
import { useLocation } from "react-router-dom";

const App = () => {
  const [collapsed, setColapsed] = useState(false);

  const toggleColapsed = () => {
    setColapsed(!collapsed);
  };

  const location = useLocation();

  return (
    <div className="App">
      <div className="menu">
        <Button type="primary" onClick={toggleColapsed} className="Button">
          {React.createElement(
            collapsed ? MenuFoldOutlined : MenuUnfoldOutlined
          )}
        </Button>
        <Menu
          defaultSelectedKeys={["/saudaveis"]}
          selectedKeys={[location.pathname]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="/saudaveis" icon={<AppleOutlined />}>
            <Link to="/saudaveis">Saudáveis</Link>
          </Menu.Item>
          <Menu.Item key="/bests" icon={<StarOutlined />}>
            <Link to="/bests">Melhores comidas</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="products">
        <Switch>
          <Product products={products} History={location} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
