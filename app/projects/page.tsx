import styles from "./page.module.css";
import Image from 'next/image';
import myGif from '../../public/demo.gif';
import startMenuGif1 from '../../public/start_menu_1.gif';
import startMenuGif2 from '../../public/start_menu_2.gif';
import miningGif from '../../public/mining.gif';

export default function Projects() {
	return (
		<main className={styles.main}>
			<div  className={styles.pagetitle}>
				<h1>Projects</h1>
			</div>

			<br></br>
			<br></br>
			

			<div className={styles.text}>
				{/* SHOWCASE: MINING MINIGAME PORT */}			

				<h2>Mining Minigame Port</h2>
				<br></br>
				<a href="https://github.com/Voluptua/pokeemerald/tree/ExcavationUi"
				   target="_blank"
				   rel="noopener norefeerer"
				>
					<Image className={styles.gif} src={miningGif} alt="Mining Minigame Port to the 3rd Gen. Pokemon Game Pokemon Emerald" width={480} height={320} /> <br></br><br></br>	
				</a>
				The Mining Minigame from the 4th generation Pokemon Games is ported to "pokeemerald".<br></br>
			        This project was one of the most important projects I've been working on. It tought me <br></br>
				a lot about how the "pokeemerald" Game-Engine works. <br></br><br></br><br></br>
				
				
				{/* SHOWCASE: CUSTOM START MENU */}			

				<h2>Custom Start Menu</h2>
				<br></br>
				<a href="https://github.com/Voluptua/pokeemerald/tree/start_menu_1"
				   target="_blank"
				   rel="noopener norefeerer"
				>
					<Image className={styles.gif} src={startMenuGif1} alt="Start Menu for vanilla Pokemon Emerald" width={480} height={320} /> 
				</a>
				<a href="https://github.com/Voluptua/pokeemerald/tree/pokemagma-debug"
				   target="_blank"
				   rel="noopener norefeerer"
				>
					<Image unoptimized={false} className={styles.gif} src={startMenuGif2} alt="Start Menu for Voluptua's Fangame" width={480} height={320} /> <br></br><br></br>	
				</a>
				Because I am doing decomp AND I am working on my own Fangame, I changed the start menu. <br></br>
			        I love the rotating icons in the Gen. 4 start menu, so designed my own one! By the way, there are<br></br>
				Two versions of it! One is for my Fangame and the other one is for vanilla "pokeemerald"! <br></br><br></br><br></br>

				{/* SHOWCASE: PORYDELETE */}			

				<h2>Porydelete</h2>
				<br></br>
				<a href="https://github.com/Voluptua/porydelete"
				   target="_blank"
				   rel="noopener norefeerer"
				>
          </a>
				Porydelete was meant to be a CLI tool to cleanup your 3rd Gen. decomp project. However, because it <br></br>
			        edits the code, there are so many cases where my tool would brake something! So I decided to stop working on it.<br></br>
				But still, it was an important step to be a better programmer, because it was my first Rust project!<br></br><br></br><br></br>

				
				{/* SHOWCASE: ZONED */}			

				<h2>zoned</h2>
				<br></br>
				<a href="https://github.com/Voluptua/zoned"
				   target="_blank"
             rel="noopener norefeerer"
				>
				</a>
				Zoned is a CLI-tool for extracting and compiling Zone-Data from the 6th generation Pokemon Games!<br></br>
			        it's not finished yet, but it is super useful for the 6th Gen. ROM-Hackers. They had to manually edit the bytes, so<br></br>
				I made this tool which converts the Zone-Data to JSON and back to binary.<br></br><br></br><br></br>

				
			</div>

		</main>
	)
}
