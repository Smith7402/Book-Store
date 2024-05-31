import React, { useEffect } from "react";
import classes from "./LastContent.module.scss";
import CommonLayout from "../../commonlayout/CommonLayout";
import PaddingLayout from "../../commonlayout/PaddingLayout";
import Title from "@/components/Titles/Title";
import Professor from "./Professor/Professor";
import professorPic1 from "@/assets/image/professorPic1.png";
import professorPic2 from "@/assets/image/professorPic2.png";
import professorPic3 from "@/assets/image/professorPic3.png";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import actionUser from "../../../store/user/action";

export default function LastContent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // console.log("Log user", user?.user?.[0]);
  console.log("Log user", user);

  useEffect(() => {
    dispatch({
      type: actionUser.FETCH_USER_REQUEST,
      payload: {
        id: 1,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommonLayout>
      <PaddingLayout>
        <div className={classes["last-content"]}>
          <div className={classes["Title"]}>
            <Title
              mainTitle="Our Tracks"
              subTitle="Lorem Ipsum is simply dummy text of the printing."
            />
          </div>

          <div className={classes["Professor"]}>
            <ul>
              <li>
                <Professor
                  imageUrl={professorPic1}
                  name={"Matthew D. McNatt"}
                  // name={user?.user?.maidenName || "Matthew D. McNatt"}
                  // name={
                  //   `${s?.[10]?.firstName} ${s?.[10]?.maidenName} ${s?.[10]?.lastName}` ||
                  //   "Loading..."
                  // }
                  // name={user.name}
                />
              </li>
              <li>
                <Professor
                  imageUrl={professorPic2}
                  name={"Tracyy A. Wrightt"}
                  // name={user.name}
                />
              </li>
              <li>
                <Professor
                  imageUrl={professorPic3}
                  name={"Cynthia T. Nelson"}
                  // name={user.name}
                />
              </li>
            </ul>
          </div>

          <div className={classes["subscribe-form"]}>
            <div className={classes["form"]}>
              <div className={classes["form-title"]}>
                Subscribe to our newsletter
              </div>

              <div className={classes["form-description"]}>
                Lorem Ipsum is simply dummy text of the printing.
              </div>

              <div className={classes["form-input"]}>
                <InputGroup>
                  <Input
                    placeholder="Email Address"
                    size="lg"
                    borderRadius="96px"
                    color="black"
                    bg="white"
                    width="100%"
                    maxWidth="600px"
                    className={classes["input"]}
                  />
                  <InputRightElement width="4.5rem">
                    <button className={classes["btn-send"]}>Send</button>
                  </InputRightElement>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </PaddingLayout>
    </CommonLayout>
  );
}
