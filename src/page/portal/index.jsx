import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import actionSupplier from "../../store/supplier/action";

function Portal() {
  const id = 1;
  const dispatch = useDispatch();
  const supplierData = useSelector((state) => state.supplier);
  const supApi = supplierData.supplier;
  console.log(supApi);

  useEffect(() => {
    dispatch({
      type: actionSupplier.GET_SUPPLIER_BY_ID_REQUEST,
      payload: {
        id: id,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes["DASHBOARD"]}>
      <p>Đây là nơi chứa thông tin lấy được but log ra supplierData trước đã</p>
      <p>Đã đc</p>
    </div>
  );
}

export default Portal;
