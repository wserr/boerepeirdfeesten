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
				</p> <Carousel
					transitionTime={1000}
					interval={4000}
					autoPlay={true}
					showThumbs={true}
					infiniteLoop={true}
					
				>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="agristo.jpg" alt="agristo" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="bourgeois.jpg" alt="bourgeois" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="christophedelrue.png" alt="christophedelrue" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="davina.png" alt="davina" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="dewaele.jpg" alt="dewaele" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="dworkx.jpeg" alt="dworkx" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="eeckhout.jpg" alt="eeckhout" />
					</div>
					<div className={styles.imagecontainer}>
						<img className={styles.image} src="ellendemets.png" alt="ellendemets" />
					</div>
					<div className={styles.imagecontainer}>
						<img className={styles.image} src="finipur.png" alt="finipur" />
					</div>
					<div className={styles.imagecontainer}>
						<img className={styles.image} src="foxy.png" alt="foxy" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="kartonnage_2.jpg" alt="kartonnage_lambrecht" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="movealltheway.png" alt="movealltheway" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="nelsondevos.png" alt="nelsondevos" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="nickderoo.png" alt="nickderoo" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="nielslutin.jpg" alt="nielslutin" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="putman.png" alt="putman" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="remelle.png" alt="remelle" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="shary.jpg" alt="shary" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="taelman.png" alt="taelman" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="tdk.jpg" alt="tdk" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="tommeenergie_2.png" alt="tommeenergie" />
					</div>

					<div className={styles.imagecontainer}>
						<img className={styles.image} src="vanhoutte.png" alt="vanhoutte" />
					</div>
				</Carousel>
			</>
		);
	}
}
