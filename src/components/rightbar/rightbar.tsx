/*
 * @Date: 2024-01-11 16:22:54
 * @Author: Bruce Hsu
 * @Description: 
 */
import Image from "next/image"

import { MdPlayCircleFilled } from "react-icons/md"

// Custom Imports - Style
import styles from "./rightbar.module.css"

export default function RightBar() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.bgContainer}>
					<Image src="/astronaut.png" alt="" fill className={styles.bg}/>
				</div>
				<div className={styles.texts}>
					<span className={styles.notification}>🔥 Available Now</span>
					<h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
					<span className={styles.subtitle}>Takes 4 minutes to learn</span>
					<p className={styles.description}>
						Learn uosum dolor sit amet consectetur sjdkfjksaf
						Reprehenderit eius libero perspiciatis possimus
					</p>
					<button className={styles.button}>
						<MdPlayCircleFilled />
						Watch
					</button>
				</div>
			</div>
		</div>
	)
}