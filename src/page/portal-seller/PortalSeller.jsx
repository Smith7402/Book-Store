import React from "react";
import classes from "./PortalSeller.module.scss";
import CustomButton from "../../components/custom-button/CustomButton";

function PortalSeller() {
  // const categories = [
  //   {
  //     industry: {},
  //     group: {},
  //     section: {},
  //   },
  // ];

  return (
    <div className={classes["portalSeller"]}>
      <div className={classes["fillter"]}>
        <div className={classes["input"]}>
          <input type="text" placeholder="Tìm kiếm mã NCC, tên NCC, email" />
        </div>
        <div className={classes["button-group"]}>
          <CustomButton
            backgroundColor="#f2f2f2"
            color="#707070"
            margin="0 20px 0 0"
            padding="5px 20px"
            fontWeight="bold"
          >
            Thiết lập lại
          </CustomButton>
          <CustomButton
            backgroundColor="#138300"
            color="white"
            padding="5px 20px"
            fontWeight="bold"
          >
            Tìm kiếm
          </CustomButton>
        </div>
      </div>

      <div className={classes["seller-container"]}>container</div>

      <div className={classes["footer"]}>Footer</div>
    </div>
  );
}

export default PortalSeller;
