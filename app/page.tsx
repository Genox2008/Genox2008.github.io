import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pagetitle}>
      	<h1>Voluptua's Homepage</h1>
      </div>
      
      <div className={styles.centerText}>
        <h1>Hello gadies and lentlemen. My name is <span>Voluptua</span>! &#8628;</h1>
        <h2><br></br>
            &bull; You can tell, by the colors, that I am a Rust stan...<br></br>
            &bull; I love Embedded-Programming<br></br>
            &bull; DO NOT use Java<br></br>
            &bull; DO NOT use Ruby<br></br>
            &bull; DO NOT use Windows<br></br>
            &bull; If you use any of those "DO NOT use" things, don't talk to me lol<br></br>
            &bull; DO NOT take this seriously!<br></br>
        </h2>
      </div>

      <div className={styles.grid}>
        <a
          href="./blogs"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Blogs <span>-&gt;</span>
          </h2>
          <p>Blogs about various Computer-Science Topics</p>
        </a>

        <a
          href="./links"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Links  <span>-&gt;</span>
          </h2>
          <p>Useful resource links I collected over the years.</p>
        </a>

	 <a
          href="./projects"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Projects  <span>-&gt;</span>
          </h2>
          <p>A list of projects I am working on.</p>
        </a>


        <a
          href="https://github.com/Voluptua"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>My Github account where I maintain all my projects.</p>
        </a>

      </div>
   	   
   </main>
  );
}
