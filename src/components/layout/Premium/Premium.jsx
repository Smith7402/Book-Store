import React from "react";
import classes from "./Premium.module.scss";
import CommonLayout from "../../commonlayout/CommonLayout";
import PaddingLayout from "../../commonlayout/PaddingLayout";
import Title from "@/components/Titles/Title";
import IconHome1 from "@/components/icons/IconHome1";
import PremiumIcon1 from "@/assets/image/premiumIcon1.png";
import PremiumIcon2 from "@/assets/image/premiumIcon2.png";
import ReviewerSlide from "@/components/layout/Premium/Reviewer/ReviewerSlide";

export default function Premium() {
  return (
    <CommonLayout>
      <div className={classes["premium"]}>
        <div className={classes["premium-banner"]}>
          <div className={classes["banner-left"]}>
            <div className={classes["premium-banner-icon"]}>
              <IconHome1 fontSize={400} />
            </div>
          </div>

          <div className={classes["banner-right"]}>
            <h1 className={classes["banner-right-title"]}>
              Premium <span className={classes["orangeText"]}>Learning</span>{" "}
              <br /> Experience
            </h1>

            <div className={classes["banner-right-items"]}>
              <div className={classes["item-icon"]}>
                <img
                  src={PremiumIcon1}
                  alt=""
                  className={classes["item-icon-img"]}
                />
              </div>
              <div className={classes["item-text"]}>
                <h3 className={classes["item-title"]}>Easily Accessible</h3>
                <p className={classes["item-description"]}>
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>

            <div className={classes["banner-right-items"]}>
              <div className={classes["item-icon"]}>
                <img
                  src={PremiumIcon2}
                  alt=""
                  className={classes["item-icon-img"]}
                />
              </div>
              <div className={classes["item-text"]}>
                <h3 className={classes["item-title"]}>Fun learning expe</h3>
                <p className={classes["item-description"]}>
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>

        <PaddingLayout>
          {/* Title */}
          <div className={classes["Title"]}>
            <Title
              mainTitle="What Student's Say"
              subTitle="Lorem Ipsum is simply dummy text of the printing."
            />
          </div>

          <div className={classes["slide-reviewers"]}>
            <ReviewerSlide />
          </div>
        </PaddingLayout>
      </div>
    </CommonLayout>
  );
}
