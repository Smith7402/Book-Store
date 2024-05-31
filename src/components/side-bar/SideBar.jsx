import React from "react";
import classes from "./SideBar.module.scss";
import IconSB_Overview from "@/components/icons/IconSB_Overview";
import IconSB_SupplierCategory from "@/components/icons/IconSB_SupplierCategory";
import IconSB_SupplierList from "@/components/icons/IconSB_SupplierList";
import IconSB_OrderHistory from "@/components/icons/IconSB_OrderHistory";
import IconSB_PriceList from "@/components/icons/IconSB_PriceList";
import IconSB_TrackingHistory from "@/components/icons/IconSB_TrackingHistory";
import IconBackArrow from "@/components/icons/IconBackArrow";
import { useHistory } from "react-router-dom";

function SideBar() {
  const pathname = useHistory();

  const menuPortal = [
    {
      name: "",
      url: "",
      icon: IconBackArrow,
    },
    {
      name: "Tổng quan",
      url: "/portal",
      icon: IconSB_Overview,
    },
    {
      name: "Danh mục NCC",
      url: "/portal/seller",
      icon: IconSB_SupplierCategory,
    },
    {
      name: "Danh sách NCC",
      url: "/portal/supplier",
      icon: IconSB_SupplierList,
    },
    {
      name: "Lịch sử đặt hàng",
      url: "",
      icon: IconSB_OrderHistory,
    },
    {
      name: "Bảng báo giá",
      url: "",
      icon: IconSB_PriceList,
    },
    {
      name: "Lịch sử theo dõi",
      url: "",
      icon: IconSB_TrackingHistory,
    },
  ];

  //
  // const menuProduct = [
  //   {
  //     name: "",
  //     url: "",
  //     icon: IconBackArrow,
  //   },
  //   {
  //     name: "Tổng quan",
  //     url: "",
  //     icon: IconSB_Overview,
  //   },
  //   {
  //     name: "Danh mục NCC",
  //     url: "",
  //     icon: IconSB_SupplierDirectory,
  //   },
  //   {
  //     name: "Danh sách NCC",
  //     url: "",
  //     icon: IconSB_SupplierList,
  //   },
  //   {
  //     name: "Lịch sử đặt hàng",
  //     url: "",
  //     icon: IconSB_OrderHistory,
  //   },
  //   {
  //     name: "Bảng báo giá",
  //     url: "",
  //     icon: IconSB_PriceList,
  //   },
  //   {
  //     name: "Lịch sử theo dõi",
  //     url: "",
  //     icon: IconSB_TrackingHistory,
  //   },
  // ];
  // console.log(menuProduct);

  return (
    <div>
      <div className={classes["sidebar"]}>
        <ul>
          {menuPortal.map((s, key) => {
            let Icon = s.icon;
            return (
              <li
                key={key}
                className={`${pathname?.location?.pathname == s?.url ? classes["active"] : ""}`}
              >
                <a href={s?.url}>
                  <Icon fontSize={2} />
                  {s?.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
