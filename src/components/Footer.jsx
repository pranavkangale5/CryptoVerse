import React from "react";
import { Typography } from "antd";

const Footer = () => {
  return (
    <div>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Cryptoverse &trade;
        <br />
        All rights reserved
      </Typography.Title>
      <div
        className={
          "text-white md:flex list-none flex-row justify-between items-center  text-white-600 hover:text-blue-800 visited:text-white-600 text-2xl"
        }
      >
        <a
          target="_blank"
          className={"text-white"}
          href="https://github.com/pranavkangale5"
        >
          <i className="ri-github-fill"></i>
        </a>

        <a
          target="_blank"
          className={"text-white"}
          href="https://www.linkedin.com/in/pranav-kangale-0642b9233/"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a
          target="_blank"
          className={"text-white"}
          href="https://www.instagram.com/pranav_kangale05/"
        >
          <i className="social-icons ri-instagram-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
