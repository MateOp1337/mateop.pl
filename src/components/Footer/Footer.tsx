import styles from './Footer.module.scss';
import avatar from '../../assets/avatar.png';
import type React from 'react';

type FooterRef = React.RefObject<null | HTMLElement>;

export default function Footer({
  ref,
  heroRef,
  projectsRef,
}: {
  ref?: React.RefObject<HTMLElement | null>;
  heroRef: FooterRef;
  projectsRef: FooterRef;
}) {
  const scrollTo = (ref: FooterRef) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <footer ref={ref} id="footer" className={styles.footer}>
      <div className={styles.user}>
        <img src={avatar} className={styles.avatar} />

        <div className={styles.content}>
          <p className={styles.username}>MateOp // &lt;/mouse&gt;</p>
          <p className={styles.made}>Made with ❤️ in Poland 🇵🇱.</p>
        </div>
      </div>

      <div className={styles.navigation}>
        <div className={styles.links}>
          <p className={styles.category}>
            <p className={styles.name}>Come back</p>

            <button onClick={() => scrollTo(heroRef)}>Home</button>
            <button onClick={() => scrollTo(projectsRef)}>
              Featured Projects
            </button>

            <p className={styles.soon}>Soon new sections!</p>
          </p>

          <p className={styles.category}>
            <p className={styles.name}>Contact</p>

            <a href="mailto:mateop1337@proton.me">E-Mail</a>
            <a href="https://discord.com/users/1209393335102603325">Discord</a>
          </p>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/MateOp1337" className={styles.social}>
            <i className="fa-brands fa-github" />
          </a>

          <a
            href="https://www.instagram.com/mateop.mysz"
            className={styles.social}
          >
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
