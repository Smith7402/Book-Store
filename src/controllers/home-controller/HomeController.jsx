import React, { useEffect } from "react";
import classes from "./Home.module.scss";
import Banner from "@/components/layout/Banner/Banner";
import Courses from "@/components/layout/Courses/Courses";
import Premium from "@/components/layout/Premium/Premium";
import LastContent from "@/components/layout/LastContent/LastContent";
import { useDispatch } from "react-redux";
import actionApp from "../../store/app/action";
import { useSelector } from "react-redux";

function HomeController() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading } = useSelector((state) => state?.app);
  // console.log(loading);

  useEffect(() => {
    dispatch({
      type: actionApp.LOADING_APP_START,
      payload: true,
    });
  }, []);

  return (
    <div className={classes["home"]}>
      <Banner />
      <Courses />
      <Premium />
      <LastContent />
    </div>
  );
}

export default HomeController;
