import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import CommonLayout from "../../commonlayout/CommonLayout";
import PaddingLayout from "../../commonlayout/PaddingLayout";
import IconLogo from "@/components/icons/IconLogo";
import { useHistory } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const history = useHistory();

  useEffect(() => {
    if (history?.location?.pathname == "/") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [history?.location?.pathname]);

  return (
    <CommonLayout>
      <PaddingLayout>
        <div
          className={`${classes["header"]} ${active ? classes["header-home"] : ""}`}
        >
          <div className={classes["logo"]}>
            <IconLogo fontSize="150px" />
          </div>

          <button className={classes["btn-open"]} onClick={handleClick}>
            <FaBars />
          </button>
          
          <ul
            className={`${classes["nav"]} ${isActive ? classes["responsive-nav"] : ""}`}
          >
            <li>
              <button
                className={classes["nav-btn-close"]}
                onClick={handleClick}
              >
                <FaTimes />
              </button>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a href="">Our Service</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <button className={classes["btn-signin"]}>Sign in</button>
            </li>
          </ul>
        </div>
      </PaddingLayout>
    </CommonLayout>
  );
}
