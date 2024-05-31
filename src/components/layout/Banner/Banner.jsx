import React from "react";
import classes from "./Banner.module.scss";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import IconHome2 from "@/components/icons/IconHome2";
import CommonLayout from "../../commonlayout/CommonLayout";
import PaddingLayout from "../../commonlayout/PaddingLayout";

export default function Banner() {
  return (
    <CommonLayout>
      <div className={classes["banner"]}>
        <PaddingLayout>
          <div className={classes["layout1"]}>
            <div className={classes["layout1-left"]}>
              <h1 className={classes["title"]}>
                The <span className={classes["orangeText"]}>Smart</span> <br />
                Choice For <span className={classes["orangeText"]}>Future</span>
              </h1>
              <p className={classes["description"]}>
                Elearn is a global training provider based across the UK that
                specialises in accredited and bespoke training courses. We crush
                the...
              </p>
              <div className={classes["search-box"]}>
                <InputGroup>
                  <InputLeftElement>
                    <SearchIcon />
                  </InputLeftElement>
                  <Input
                    placeholder="Search for a location..."
                    size="md"
                    borderRadius="96px"
                    // textIndent="30px"
                    bg="white"
                    className={classes["input"]}
                  />
                  <InputRightElement>
                    <Button
                      size="auto"
                      height="33px"
                      textAlign="center"
                      fontSize="13px"
                      width="80px"
                      bg="#4D2C5E"
                      color="white"
                      marginLeft="-12"
                      padding="2"
                      borderRadius="96px"
                      _hover={{ bg: "#ff7426" }}
                    >
                      Continue
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
            </div>

            <div className={classes["layout1-right"]}>
              <IconHome2
                fontSize={600}
                className={classes["layout1-right-icon"]}
              />
            </div>
          </div>
        </PaddingLayout>
      </div>
    </CommonLayout>
  );
}
