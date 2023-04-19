import React from "react";
import { Typography, Avatar, Menu, link } from "antd";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Icon} size={"large"} />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}> CryptoVerse </Link>
        </Typography.Title>
      </div>

      <Menu
        theme="dark"
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: <Link to={"/"}> Home </Link>,
          },
          {
            key: "2",
            icon: <FundOutlined />,
            label: <Link to={"/Cryptocurrencies"}> cryptocurrencies </Link>,
          },
          {
            key: "3",
            icon: <MoneyCollectOutlined />,
            label: <Link to={"/News"}>news </Link>,
          },
          {
            key: "4",
            icon: <BulbOutlined />,
            label: <Link to={"/Exchanges"}> exchanges </Link>,
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
