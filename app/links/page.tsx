import styles from "./page.module.css";

export default function Links() {
	return (
		<main className={styles.main}>
			<div className={styles.pagetitle}>
				<h1>Links</h1>
			</div>

			<br></br>
			<br></br>
			<div className={styles.linkfields}>
				<div className={styles.text}>
					<h2 className={styles.header}>Computer Science in general</h2>
					<br></br>
					<ul>
						<li className={styles.url}><a href="https://github.com/NationalSecurityAgency/ghidra">Reverse Engineering: Ghidra</a></li>
						<li className={styles.url}><a href="https://github.com/rizinorg/cutter">Reverse Engineering: Cutter</a></li>
						<li className={styles.url}><a href="https://github.com/getgrit/gritql">GritQL: jQuery for Source code</a></li>
						<li className={styles.url}><a href="https://github.com/Jaysmito101/rusty.hpp">Ownership-/Borrowingsystem for C++</a></li>
					</ul>
				</div>
				<div className={styles.text}>
					<h2 className={styles.header}>Nintendo-Dev Links</h2>
					<br></br>
					<ul>
						<li className={styles.url}><a href="https://www.coranac.com/tonc/text/toc.htm">GBA Tutorial: tonc</a></li>
						<li className={styles.url}><a href="https://www.problemkaputt.de/gbatek-contents.htm">GBA/NDS/DSi/3DS Docs</a></li>
						<li className={styles.url}><a href="https://github.com/3DSGuy/Project_CTR">3DS Tools</a></li>
						<li className={styles.url}><a href="https://github.com/Martmists-GH/ghidra-ctr-loader">CTR Ghidra Loader</a></li>
					</ul>
				</div>
				<div className={styles.text}>
					<h2 className={styles.header}>Rust Links</h2>
					<br></br>
					<ul>
						<li className={styles.url}><a href="https://doc.rust-lang.org/stable/book/">Official Rust Book</a></li>
						<li className={styles.url}><a href="https://adventures.michaelfbryan.com/posts/">Rust Blog 01</a></li>
						<li className={styles.url}><a href="https://github.com/pretzelhammer/rust-blog">Rust Blog 02</a></li>
						<li className={styles.url}><a href="https://github.com/embassy-rs/embassy">Embassy: Embedded Framework</a></li>
						<li className={styles.url}><a href="https://github.com/rust-lang/rustlings">Rustlings: Rust excercises</a></li>
					</ul>
				</div>
				<div className={styles.text}>
					<h2 className={styles.header}>Others</h2>
					<br></br>
					<ul>
						<li className={styles.url}><a href="https://github.com/geode-sdk/geode">GD-Modding: Geode SDK</a></li>
						<li className={styles.url}><a href="https://github.com/localsend/localsend">Localsend: AirDrop alternative</a></li>
						<li className={styles.url}><a href="https://github.com/codecrafters-io/build-your-own-x">Build Your Own X</a></li>
					</ul>
				</div>
			</div>
		</main>
	)
}
