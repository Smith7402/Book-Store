import React, { useState, useEffect } from "react";
import classes from "./ReviewerSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Reviewer from "@/components/layout/Premium/Reviewer/Reviewer";
import avaReviewer1 from "@/assets/image/avaReviewer1.png";
import avaReviewer2 from "@/assets/image/avaReviewer2.png";
import avaReviewer3 from "@/assets/image/avaReviewer3.png";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ReviewerSlide() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let content;

  if (windowSize.width <= 479) {
    // Chạy đoạn code khi kích thước màn hình bằng x (mobile)
    content = (
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          // direction="vertical"
          className={classes["review-slide-swiper"]}
        >
          <SwiperSlide
            className={`${classes["review-swiper"]} ${classes["mobile"]}`}
          >
            <Reviewer
              imageUrl={avaReviewer1}
              review="“Teachings of the great explore of truth, 
                  the master-builder of human happiness. 
                  No one rejects, dislikes, or avoids pleasure 
                  itself, pleasure itself.”"
              name="Finlay Kirk"
              text="Web Developper                         "
            />
          </SwiperSlide>

          <SwiperSlide
            className={`${classes["review-swiper"]} ${classes["mobile"]}`}
          >
            <Reviewer
              imageUrl={avaReviewer2}
              review="“Complete account of the system and
                  expound the actual Contrary to popular
                  belief, Lorem Ipsum is not simply 
                  random text. It has roots.”"
              name="Dannette P. Cervantes"
              text="Web Design"
            />
          </SwiperSlide>

          <SwiperSlide
            className={`${classes["review-swiper"]} ${classes["mobile"]}`}
          >
            <Reviewer
              imageUrl={avaReviewer3}
              review="“There are many variations of passages
                  of Lorem Ipsum available, but the majority
                  have suffered alteration in some form,
                  by injected humor.”"
              name="Clara R. Altman                                      "
              text="UI&UX Design"
            />
          </SwiperSlide>

          <SwiperSlide
            className={`${classes["review-swiper"]} ${classes["mobile"]}`}
          >
            <Reviewer
              imageUrl={avaReviewer1}
              review="“Teachings of the great explore of truth, 
                  the master-builder of human happiness. 
                  No one rejects, dislikes, or avoids pleasure 
                  itself, pleasure itself.”"
              name="Finlay Kirk"
              text="Web Developper                   "
            />
          </SwiperSlide>

          <SwiperSlide
            className={`${classes["review-swiper"]} ${classes["mobile"]}`}
          >
            <Reviewer
              imageUrl={avaReviewer2}
              review="“Complete account of the system and
                  expound the actual Contrary to popular
                  belief, Lorem Ipsum is not simply 
                  random text. It has roots.”"
              name="Dannette P. Cervantes"
              text="Web Design"
            />
          </SwiperSlide>

          <SwiperSlide
            className={`${classes["review-swiper"]} ${classes["mobile"]}`}
          >
            <Reviewer
              imageUrl={avaReviewer3}
              review="“There are many variations of passages
                  of Lorem Ipsum available, but the majority
                  have suffered alteration in some form,
                  by injected humor.”"
              name="Clara R. Altman"
              text="UI&UX Design"
            />
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    );
  } else {
    // Mặc định, hoặc các trường hợp khác (>mobile)
    content = (
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={classes["review-slide-swiper"]}
        >
          <SwiperSlide>
            <Reviewer
              imageUrl={avaReviewer1}
              review="“Teachings of the great explore of truth, 
                  the master-builder of human happiness. 
                  No one rejects, dislikes, or avoids pleasure 
                  itself, pleasure itself.”"
              name="Finlay S. Kirk"
              text="Web Developper"
            />
          </SwiperSlide>

          <SwiperSlide className={classes["review-swiper"]}>
            <Reviewer
              imageUrl={avaReviewer2}
              review="“Complete account of the system and
                  expound the actual Contrary to popular
                  belief, Lorem Ipsum is not simply 
                  random text. It has roots.”"
              name="Dannette P. Cervantes"
              text="Web Design"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Reviewer
              imageUrl={avaReviewer3}
              review="“There are many variations of passages
                  of Lorem Ipsum available, but the majority
                  have suffered alteration in some form,
                  by injected humor.”"
              name="Clara R. Altman"
              text="UI&UX Design"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Reviewer
              imageUrl={avaReviewer1}
              review="“Teachings of the great explore of truth, 
                  the master-builder of human happiness. 
                  No one rejects, dislikes, or avoids pleasure 
                  itself, pleasure itself.”"
              name="Finlay Kirk"
              text="Web Developper"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Reviewer
              imageUrl={avaReviewer2}
              review="“Complete account of the system and
                  expound the actual Contrary to popular
                  belief, Lorem Ipsum is not simply 
                  random text. It has roots.”"
              name="Dannette P. Cervantes"
              text="Web Design"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Reviewer
              imageUrl={avaReviewer3}
              review="“There are many variations of passages
                  of Lorem Ipsum available, but the majority
                  have suffered alteration in some form,
                  by injected humor.”"
              name="Clara R. Altman"
              text="UI&UX Design"
            />
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    );
  }

  return <div>{content}</div>;
}
