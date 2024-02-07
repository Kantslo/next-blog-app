import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.png"
          alt="A hero image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kantslo</h1>
      <p>
        I learn web development - currently I am trying to learn the Next.js
        fullstack framework.
      </p>
    </section>
  );
}

export default Hero;
