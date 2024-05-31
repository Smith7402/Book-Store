import React from "react";
import classes from "./Professor.module.scss";
import { Box, Image } from "@chakra-ui/react";
import InstagramLogo from "@/assets/image/InstagramLogo.png";
import LinkedInLogo from "@/assets/image/LinkedInLogo.png";

export default function Professor(props) {
  const { imageUrl, name } = props;

  const property = {
    imageUrl: imageUrl,
    imageAlt: "Professor",
    name: name,
    formattedPrice: "$98",
  };
  return (
    <div className={classes["professor"]}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="15px"
        overflow="hidden"
        className={classes["professor-item"]}
      >
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          borderRadius="25px"
          padding="13px"
          className={classes["professor-item-img"]}
        />

        <Box p="6" marginTop="-20px">
          <Box
            mt="-2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            ml="-7px"
            color="black"
            className={classes["professor-item-sub-box1"]}
          >
            {property.name}
          </Box>

          <Box display="flex" alignItems="baseline">
            <Box
              color="#868686"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              mt="-1"
              ml="-7px"
              className={classes["professor-item-sub-box2"]}
            >
              Professor @George Brown College
            </Box>
          </Box>

          <Box color="#FFA135">
            <Box
              color="#ACACAC"
              fontSize="sm"
              lineHeight="1.2"
              ml="-7px"
              mt="2"
              className={classes["professor-item-sub-box3"]}
            >
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </Box>
          </Box>

          <Box
            as="span"
            display="flex"
            mt="2"
            alignItems="center"
            fontWeight="bold"
            ml="-7px"
            color="#FF7426"
            className={classes["professor-item-sub-box4"]}
          >
            Engineering physics
            <Image
              src={InstagramLogo}
              alt="Instagram"
              ml="auto"
              bg="#F9F9F9"
              p="2"
              borderRadius="7px"
            />
            <Image
              src={LinkedInLogo}
              alt="Linkedin"
              ml="2"
              bg="#F9F9F9"
              p="2"
              borderRadius="7px"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
