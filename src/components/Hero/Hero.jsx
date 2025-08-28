
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hi, I'm</span>
          <span className={styles.name}>Sk Sakirul Islam</span>
        </h1>
        <p className={styles.description}>
          Full Stack Developer from India, skilled in React, Node.js,
          Express.js, and MongoDB. I build dynamic and responsive web
          applications that turn ideas into reality.
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="mailto:sksakirul484@gmail.com"
            className={`${styles.contactBtn} ${styles.primary}`}
          >
            <span>Contact Me</span>
            <svg
              className={styles.buttonIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href={getImageUrl("resume/Resume.pdf")} download="Sakirul_resume" className={`${styles.contactBtn} ${styles.secondary}`}>
            <span>My Resume</span>
            <svg
              className={styles.buttonIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15V3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.heroImg}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("hero/g.png") || "/placeholder.svg"}
            alt="Hero image of me"
          />
          <div className={styles.imageGlow}></div>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
};
