"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./sponsors.module.css";

export default class Sponsors extends Component {
  render() {
    return (
      <>
        <p>
          Met dank aan volgende <b>sponsors</b>, die het event mede mogelijk
          gemaakt hebben.
        </p>
        <Carousel
          transitionTime={1000}
          interval={2000}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_1.png" alt="image1" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_2.png" alt="image2" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_3.png" alt="image3" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_4.png" alt="image4" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_5.png" alt="image5" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_6.png" alt="image6" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_7.png" alt="image7" />
          </div>
          <div className={styles.imagecontainer}>
            <img className={styles.image} src="sponsor_8.png" alt="image8" />
          </div>
        </Carousel>
      </>
    );
  }
}
