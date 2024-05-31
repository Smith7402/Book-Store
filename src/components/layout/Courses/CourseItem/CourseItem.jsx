import React from "react";
import classes from "@/components/layout/Courses/CourseItem/CourseItem.module.scss";
import { Box, Image, Badge } from "@chakra-ui/react";
import {
  StarIcon,
  TimeIcon,
  DownloadIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

export default function CourseItem(props) {
  const { imageUrl } = props;

  const property = {
    imageUrl: imageUrl,
    imageAlt: "UI/UX Design for Beginners",
    hour: 22,
    min: 30,
    course: 34,
    sale: 250,
    title: "UI/UX Design for Beginners",
    formattedPrice: "$98",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <div className={classes["course-item"]}>
      <Box maxW="sm" borderWidth="1px" borderRadius="30px" overflow="hidden">
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          borderRadius="40px"
          padding="13px"
          className={classes["course-item-box-img"]}
        />

        <Box
          p="6"
          marginTop="-20px"
          // marginBottom="10px"
          className={classes["course-item-box-container"]}
        >
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" bg="#FF7426" color="white">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
            >
              <span>
                <TimeIcon marginTop="-2.5px" /> {property.hour}hr {property.min}
                min
              </span>
              <span>
                <HamburgerIcon marginTop="-2.5px" marginLeft="10px" />{" "}
                {property.course} Courses
              </span>
              <span>
                <DownloadIcon marginTop="-2.5px" marginLeft="10px" />{" "}
                {property.sale} Sales
              </span>
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property.title}
          </Box>

          <Box color="#FFA135" fontWeight="bold">
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              {/*  */}
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "#FFA135" : "#F9D4AB"}
                />
              ))}
          </Box>
        </Box>
      </Box>

      <button className={classes["btn-course-item"]}>Join Course</button>
    </div>
  );
}
