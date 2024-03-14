
import TypedAnimation from './TypedAnimation'
import { getImageUrl } from '../../Utils'
import styles from './Hero.module.css'


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manoranjan</h1>
        <p className={styles.description}>
          I'm a <TypedAnimation/>
        </p>
        <p className={styles.description1}>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
        <div className={styles.buttonDiv}> 
           <a href="mailto:manoranjankrj@gmail.com" className={styles.contactBtn}>
           Contact Me
           </a>
           <a href="https://drive.google.com/drive/folders/1LZtHoQvfte2WBW_cZdUtW7AmEbVnRSX_" className={styles.contactBtn1}>
           Resume
           </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};