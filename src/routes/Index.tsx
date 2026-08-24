import clsx from 'clsx';
import styles from './Index.module.scss';
import ThalliumLogo from '../components/ThalliumLogo';
import Navigation from '../components/Navigation/Navigation';
import { useRef } from 'react';
import Footer from '../components/Footer/Footer';

export default function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navigation
        heroRef={heroRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
      />

      <div className={styles.ambientGlow} id={styles.ag1} />
      <div className={styles.ambientGlow} id={styles.ag2} />

      <section className={styles.hero} ref={heroRef} id="hero">
        <div className={styles.introduction}>
          <p className={styles.greeting}>
            Hi, I'm
            <br />
            <span className={styles.username}>MateOp</span>
          </p>
          <p className={styles.role}>Junior Full-Stack Developer</p>

          <p className={styles.aboutMe}>
            Focused on self-hosting, cryptography, privacy and open
            infrastructure. Building secure, anonymous tools as part of{' '}
            <a href="https://thallium.pages.dev/">Thallium Studio</a>.
          </p>

          <div className={styles.ctaButtons}>
            <button
              className={styles.cta}
              onClick={() =>
                skillsRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
            >
              Get to know me
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() =>
                projectsRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
            >
              Check out my projects
            </button>
          </div>
        </div>

        <div className={styles.basics}>
          <div className={styles.item}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-code')} />

            <div className={styles.content}>
              <p className={styles.title}>Coding</p>
              <p className={styles.description}>
                I'm focused on coding, mostly on backend.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-server')} />

            <div className={styles.content}>
              <p className={styles.title}>Infrastructure</p>
              <p className={styles.description}>
                I've been getting more and more into self-hosting lately.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-fingerprint')} />

            <div className={styles.content}>
              <p className={styles.title}>Privacy</p>
              <p className={styles.description}>
                I think that privacy is a human right, not an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skills} ref={skillsRef} id="skills">
        <h2>What can I work with?</h2>

        <div className={styles.skillsGrid}>
          <div className={styles.skill}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-desktop')} />
            <p className={styles.title}>Frontend</p>
            <p className={styles.description}>
              I work with <b>React</b>, <b>TypeScript</b>, <b>JavaScript</b>,{' '}
              <b>HTML</b>, <b>CSS</b>, and <b>SCSS</b>, building responsive and
              interactive web interfaces..
            </p>
          </div>

          <div className={styles.skill}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-server')} />
            <p className={styles.title}>Backend</p>
            <p className={styles.description}>
              I work with <b>Node.js</b> and <b>TypeScript</b>, building
              applications with <b>Fastify</b>, <b>REST APIs</b>, and{' '}
              <b>WebSockets</b>.
            </p>
          </div>

          <div className={styles.skill}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-database')} />
            <p className={styles.title}>Data Management</p>
            <p className={styles.description}>
              I work with <b>MongoDB</b> and I'm currently learning <b>Redis</b>
              , <b>PostgreSQL</b> and relational database systems.
            </p>
          </div>

          <div className={styles.skill}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-database')} />
            <p className={styles.title}>Infrastructure</p>
            <p className={styles.description}>
              I'm familiar with various aspects of infrastructure of
              infrastructure, including <b>Docker</b>, <b>Proxmox</b>,{' '}
              <b>Git</b> and <b>Linux</b>.
            </p>
          </div>

          <div className={styles.skill}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-palette')} />
            <p className={styles.title}>Creative</p>
            <p className={styles.description}>
              I'm currently exploring creative fields such as{' '}
              <b>Music Mixing</b>, <b>Icon Design</b> and <b>3D Modeling</b>.
            </p>
          </div>

          <div className={styles.skill}>
            <i className={clsx(styles.icon, 'fa-solid', 'fa-fingerprint')} />
            <p className={styles.title}>Security</p>
            <p className={styles.description}>
              I explore <b>Application Security</b>, <b>Networking</b>, and{' '}
              <b>Modern Cryptography</b>, focusing on secure system design.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.featuredProjects}
        ref={projectsRef}
        id="projects"
      >
        <h2>Featured Projects</h2>

        <div className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.header}>
              <ThalliumLogo className={styles.logo} />

              <div className={styles.overview}>
                <p className={styles.title}>Thallium Studio</p>
                <div className={styles.tags}>
                  <div className={clsx(styles.tag, styles.roleTag)}>
                    CEO & Developer
                  </div>

                  <div className={clsx(styles.tag, styles.productTag)}>
                    Programming Studio
                  </div>
                  <div className={clsx(styles.tag, styles.productTag)}>
                    Self-Hosting
                  </div>
                  <div className={clsx(styles.tag, styles.productTag)}>
                    Privacy-First
                  </div>
                </div>
              </div>
            </div>

            <p className={styles.description}>
              Thallium Studio is a programming studio focused privacy-first
              self-hosted software. Every Thallium product is a part of the
              whole Thallium Ecosystem, which works on your machine, and only
              there.
            </p>

            <div className={styles.buttons}>
              <a
                href="https://github.com/ThalliumStudio"
                className={clsx('button', styles.small)}
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://thallium.pages.dev/"
                className={clsx('button', styles.cta)}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer ref={footerRef} heroRef={heroRef} projectsRef={projectsRef} />
    </>
  );
}
