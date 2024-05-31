import React from "react";
import classes from "./Footer.module.scss";
import IconLogo from "@/components/icons/IconLogo";
import CommonLayout from "../../commonlayout/CommonLayout";

export default function Footer() {
  return (
    <CommonLayout>
      <div className={classes["Footer"]}>
        <div className={classes["Footer-content"]}>
          <ul className={classes["content-ul"]}>
            <li>
              <div className={`${classes["item"]} ${classes["item1"]}`}>
                <div className={classes["logo"]}>
                  <IconLogo fontSize="150px" />
                </div>

                <p className={classes["description"]}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&rsquo;s standard dummy a type specimen book.
                </p>
              </div>
            </li>

            <li>
              <div className={classes["item"]}>
                <div className={classes["title"]}>Company</div>

                <div className={classes["item-list"]}>
                  <ul>
                    <li>
                      <a href="">About Us</a>
                    </li>

                    <li>
                      <a href="">How to work?</a>
                    </li>

                    <li>
                      <a href="">Popular Course</a>
                    </li>

                    <li>
                      <a href="">Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className={classes["item"]}>
                <div className={classes["title"]}>Courses</div>

                <div className={classes["item-list"]}>
                  <ul>
                    <li>
                      <a href="">Categories</a>
                    </li>

                    <li>
                      <a href="">Offline Course</a>
                    </li>

                    <li>
                      <a href="">Video Course</a>
                    </li>

                    <li>
                      <a href="/portal">Portal</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className={classes["item"]}>
                <div className={classes["title"]}>Support</div>

                <div className={classes["item-list"]}>
                  <ul>
                    <li>
                      <a href="">FAQ</a>
                    </li>

                    <li>
                      <a href="">Help Center</a>
                    </li>

                    <li>
                      <a href="">Career</a>
                    </li>

                    <li>
                      <a href="">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className={`${classes["item"]} ${classes["item5"]}`}>
                <div className={classes["title"]}>Contact Info</div>

                <div className={classes["item-list"]}>
                  <ul>
                    <li>
                      <a href="">+0913-705-3875</a>
                    </li>

                    <li>
                      <a href="">ElizabethJ@jourrapide.com</a>
                    </li>

                    <li>
                      <a href="">
                        4808 Skinner Hollow Road <br />
                        Days Creek, OR 97429
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <footer>BookStore All Right Reserved, 2022</footer>
        <p className={classes["smith"]}>Smith</p>
      </div>
    </CommonLayout>
  );
}
