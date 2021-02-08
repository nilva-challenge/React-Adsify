import { useState } from "react";
import Link from "next/link";
import Theme from "../src/store/ThemeProvider";
import { CgProfile } from "react-icons/cg";
import { SiMinutemailer } from "react-icons/si";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import "./styles.scss";

export default function MyApp({ Component, pageProps }) {
  const [themeLight, setThemeLight] = useState(() => false);
  return (
    <>
      <Theme.Provider value={themeLight}>
        <div className={`mainContainer ${themeLight ? "Light" : "Dark"}`}>
          <div className={`${themeLight ? "Dark" : "Light"} navbar`}>
            <div
              className={`${
                themeLight ? "Dark" : "Light"
              } navbar navbar__profile`}
            >
              <CgProfile className={"navbar profile__proPic"} />
              <span className={"profile__userName"}>Danoosh Juibar</span>
            </div>
            <div className={"navbar__themeSwitcher"}>
              <label id="switch" className={"switch"}>
                <input
                  type="checkbox"
                  onChange={() => setThemeLight(!themeLight)}
                  id="slider"
                />
                <span className={`slider round`}></span>
              </label>
            </div>
            <div className={"navbar__items"}>
              <p>
                <Link href="/">
                  <a>
                    <AiFillHome className={"icon"} />
                    <span>home</span>
                  </a>
                </Link>
              </p>
              <p>
                <a href="mailto:DJooybar@gmail.com">
                  <SiMinutemailer className={"icon"} />
                  <span>email</span>
                </a>
              </p>
              <p>
                <a href="https://github.com/sirDanoosh" target="_blanck">
                  <AiFillGithub className={"icon"} /> <span>github</span>
                </a>
              </p>
            </div>
          </div>

          <div className={"content"}>
            <div
              className={`content__header ${
                themeLight ? "headDark" : "headLight"
              }`}
            >
              <img
                width="100px"
                height="100px"
                src="https://bicenter.batna.ir/wp-content/uploads/2021/01/Untitled-1-copy.png"
              />
              <div>
                <h5>Adsify React Code-Challenge</h5>
                <h6>NILVA</h6>
              </div>
            </div>
            <div className={"content__page-content"}>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </Theme.Provider>
    </>
  );
}
