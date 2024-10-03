import React from "react";

import { getImageUrl } from "../../utils.js";

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I'm Ada</h1>
        <p>
          I'm a full-stack developer with 5 years of experience in React and
          NodeJS. Feel free to reach out if you'd like to know more about me!
        </p>
        <a href="mailto:cebuka.blessing@gmail.com">Contact Me!</a>
      </div>
      {/* <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" /> */}
      <img src={getImageUrl("hero/Third Edit_Copy.png")} alt="Hero Image of me" />
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};
