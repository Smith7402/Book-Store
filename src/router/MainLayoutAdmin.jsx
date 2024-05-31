import React from "react";
import SideBar from "../components/side-bar/SideBar";
import Main from "../components/admin/main/Main";
import classes from "./index.module.scss";
import TopMenu from "../components/admin/top-menu/TopMenu";
import CommonLayout from "../components/commonlayout/CommonLayout";

function MainLayoutAdmin(props) {
  return (
    <>
      <CommonLayout>
        <div className={`${classes["layout-portal"]}`}>
          <div className={`${classes["side_bar"]}`}>
            <SideBar />
          </div>
          <div className={`${classes["main"]}`}>
            <TopMenu />
            <Main>{props?.children}</Main>
          </div>
        </div>
      </CommonLayout>
    </>
  );
}

export default MainLayoutAdmin;
