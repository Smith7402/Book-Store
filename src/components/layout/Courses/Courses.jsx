import React from "react";
import classes from "./Courses.module.scss";
import CommonLayout from "../../commonlayout/CommonLayout";
import PaddingLayout from "../../commonlayout/PaddingLayout";
import ItemGoal1 from "@/assets/image/ItemGoal1.png";
import ItemGoal2 from "@/assets/image/ItemGoal2.png";
import ItemGoal3 from "@/assets/image/ItemGoal3.png";
import CourseItem from "@/components/layout/Courses/CourseItem/CourseItem";
import coursePic1 from "@/assets/image/coursePic1.png";
import coursePic2 from "@/assets/image/coursePic2.png";
import coursePic3 from "@/assets/image/coursePic3.png";
import Title from "@/components/Titles/Title";

export default function Courses() {
  return (
    <CommonLayout>
      <PaddingLayout>
        <div className={classes["courses"]}>
          {/* Goals */}
          <div className={classes["goals"]}>
            <div className={classes["goals-item"]}>
              <div className={classes["goals-item-icon"]}>
                <img src={ItemGoal1} alt="" />
              </div>
              <div className={classes["goals-item-text"]}>
                <h3 className={classes["goals-item-title"]}>
                  Learn The Latest Skills
                </h3>
                <p className={classes["goals-item-description"]}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className={classes["goals-item"]}>
              <div className={classes["goals-item-icon"]}>
                <img src={ItemGoal2} alt="" />
              </div>
              <div className={classes["goals-item-text"]}>
                <h3 className={classes["goals-item-title"]}>
                  Get Ready For a Career
                </h3>
                <p className={classes["goals-item-description"]}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className={classes["goals-item"]}>
              <div className={classes["goals-item-icon"]}>
                <img src={ItemGoal3} alt="" />
              </div>
              <div className={classes["goals-item-text"]}>
                <h3 className={classes["goals-item-title"]}>
                  Earn a Certificate
                </h3>
                <p className={classes["goals-item-description"]}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>

          {/* Title */}
          <Title
            mainTitle="Our Tracks"
            subTitle="Lorem Ipsum is simply dummy text of the printing."
          />

          {/* Course */}
          <div className={classes["courses-items"]}>
            <ul>
              <li>
                <CourseItem imageUrl={coursePic1} />
              </li>
              <li>
                <CourseItem imageUrl={coursePic2} />
              </li>
              <li>
                <CourseItem imageUrl={coursePic3} />
              </li>
            </ul>
          </div>
        </div>
      </PaddingLayout>
    </CommonLayout>
  );
}
