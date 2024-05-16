import styles from "./page.module.css";

export default function Blogs() {
	return (
		<main className={styles.main}>
			<div className={styles.pagetitle}>
				<h1>Blogs</h1>
			</div>

			<br></br>
			<br></br>

			<div className={styles.text}>
				<h3>
					<ul>
						<li className={styles.url}><a href="./blogs/blog001">Test Blog</a></li>			
					</ul>
				</h3>
			</div>
		</main>
	)
}
