import type React from 'react';
import styles from './Navigation.module.scss';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type NavRef = React.RefObject<null | HTMLElement>;

export default function Navigation({
  heroRef,
  skillsRef,
  projectsRef,
  footerRef,
}: {
  heroRef: NavRef;
  skillsRef: NavRef;
  projectsRef: NavRef;
  footerRef: NavRef;
}) {
  const elements = {
    hero: heroRef,
    skills: skillsRef,
    projects: projectsRef,
    footer: footerRef,
  };

  const [active, setActive] = useState<keyof typeof elements>();

  const scrollTo = (ref: NavRef) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const savedEntries = new Map<Element, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          savedEntries.set(entry.target, entry);
        });

        const best = [...savedEntries.values()]
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (best) {
          setActive(best.target.id as keyof typeof elements);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    Object.keys(elements).forEach((key) => {
      const element = elements[key as keyof typeof elements].current;

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <button
        onClick={() => scrollTo(heroRef)}
        className={clsx(active === 'hero' && styles.active)}
      >
        Home
      </button>
      <button
        onClick={() => scrollTo(skillsRef)}
        className={clsx(active === 'skills' && styles.active)}
      >
        Skills
      </button>
      <button
        onClick={() => scrollTo(projectsRef)}
        className={clsx(active === 'projects' && styles.active)}
      >
        Featured Projects
      </button>
      <button
        onClick={() => scrollTo(footerRef)}
        className={clsx(active === 'footer' && styles.active)}
      >
        Contact
      </button>
    </nav>
  );
}
