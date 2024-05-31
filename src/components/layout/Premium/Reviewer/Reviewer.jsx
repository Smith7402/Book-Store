import React from "react";
import classes from "./Reviewer.module.scss";
import {
  Box,
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  Text,
  CardBody,
} from "@chakra-ui/react";

export default function Reviewer(props) {
  const { imageUrl, review, name, text } = props;

  return (
    <div className={classes["reviewer"]}>
      <Card maxW="sm" className={classes["chakra-card"]}>
        <CardBody>
          <Text
            color="#ACACAC"
            m="2"
            fontSize="md"
            className={classes["review"]}
          >
            {review}
          </Text>
        </CardBody>
        <CardHeader className={classes["chakra-card-header"]}>
          <Flex spacing="4" className={classes["chakra-card-flex1"]}>
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="no-wrap"
              className={classes["chakra-card-flex2"]}
            >
              <Avatar
                name={name}
                src={imageUrl}
                className={classes["chakra-card-img"]}
              />
              <Box>
                <Heading size="sm" className={classes["chakra-card-name"]}>
                  {name}
                </Heading>
                <Text color="#8E8E8E" className={classes["text"]}>
                  {text}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
      </Card>
    </div>
  );
}
