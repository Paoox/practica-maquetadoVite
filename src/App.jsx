import IconsNavBar from "./components/IconsNavBar";
import IconsMainNav from "./components/IconsMainNav";
import ButtonAsside from "./components/ButtonsAsside";
import ListCollection from "./components/ListCollection";

function App() {
  return (
    <>
      <div>
        <nav className="navBar">
          <a className="logoAnchor" href="">
            <img
              className="logoNav"
              src="https://vitejs.dev/logo-with-shadow.png"
              alt="logo"
            />
            <p className="textLogNav">Vite</p>
          </a>
          <div className="searchNav">
            <button type="button" className="buttonSearch" aria-label="Search">
              <span>
                <img
                  className="iconSearch"
                  src="/src/assets/search-svgrepo-com (1).svg"
                  alt="Search"
                />
                <span className="textButtonSearch">Search</span>
                <span className="ctrlNav">Ctrl K</span>
              </span>
            </button>
          </div>
          <div className="iconsNavBar">
            <IconsNavBar titleIcon="Guide" />
            <IconsNavBar titleIcon="Config" />
            <IconsNavBar titleIcon="Plugins" />
            <IconsMainNav nameIcon="Resources" />
            <IconsMainNav nameIcon="Version" />
            <a href="">
              <img
                src="/src/assets/OOjs_UI_icon_language-ltr-invert.svg"
                alt="language"
                className="language"
              />
              <IconsMainNav />
            </a>
          </div>
          <a href="" type="button" aria-checked="false" className="buttonNigth">
            <img
              src="/src/assets/airly-svgrepo-com.svg"
              alt=""
              className="sun"
            />
            bcd
          </a>
          <div className="menuSocial">
            <a href="">
              <img
                src="/src/assets/mastodon-simple-svgrepo-com.svg"
                alt="mastodon"
                className="iconSocial"
              />
            </a>
            <a href="">
              <img
                src="/src/assets/twitter-svgrepo-com.svg"
                alt="twitter"
                className="iconSocial"
              />
            </a>
            <a href="">
              <img
                src="/src/assets/discord-svgrepo-com.svg"
                alt="discord"
                className="iconSocial"
              />
            </a>
            <a href="">
              <img
                src="/src/assets/github-142-svgrepo-com.svg"
                alt="github"
                className="iconSocial"
              />
            </a>
          </div>
        </nav>
        <section className="cardInitial">
          <div className="content">
            <p>Vite</p>
            <p>
              Next Generation
              <br />
              Frontend Tooling
            </p>
            <p className="text">
              Get ready for a development environment that can
              <br /> finally catch up with you.
            </p>
          </div>
          <a href="" className="imgContainer">
            <img
              src="https://vitejs.dev/logo-with-shadow.png"
              className="logo"
              alt="Vite logo"
            />
          </a>
        </section>
        <aside className="buttonCollection">
          <button type="button" className="buttonsCollect">
            Get Started
          </button>
          <ButtonAsside nameButton="Why Vite?" />
          <ButtonAsside nameButton="View on GitHub" />
        </aside>
      </div>
      <section className="list">
        <ListCollection
          iconCollection="💡"
          titleCollection="Instant Server Start"
          contentCollection="On demand file serving over native ESM, no bundling required!"
        />
        <ListCollection
          iconCollection="⚡️"
          titleCollection="Lightning Fast HMR"
          contentCollection="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <ListCollection
          iconCollection="🛠️"
          titleCollection="Rich Features"
          contentCollection="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
        <ListCollection
          iconCollection="📦"
          titleCollection="Optimized Build"
          contentCollection="Pre-configured Rollup build with multi-page and library mode support."
        />
        <ListCollection
          iconCollection="🔩"
          titleCollection="Universal Plugins"
          contentCollection="Rollup-superset plugin interface shared between dev and build."
        />
        <ListCollection
          iconCollection="🔑"
          titleCollection="Fully Typed APIs"
          contentCollection="Flexible programmatic APIs with full TypeScript typing."
        />
      </section>
      <div className="linear"></div>
      <section className="heartContent">
        <div className="includeHeart">
          <img
            src="/src/assets/heart-svgrepo-com (3).svg"
            alt="iconHeart"
            className="iconHeart"
          />
        </div>
        <h2 className="textHeart">
          Vite is free and open source, made <br /> possible by wonderful
          sponsors.
        </h2>
      </section>
      <section>
        <div className="titleGrid">
          <h3>Special Sponsors</h3>
        </div>
      </section>
      <section className="gridContent">
        <div className="gridIcon"></div>
        <div className="gridIcon">
          <img src="https://vitejs.dev/nuxtlabs.svg" alt="nuxtlabs" />
        </div>
        <div className="gridIcon">
          <img src="https://vitejs.dev/astro.svg" alt="astro" />
        </div>
      </section>
      <section>
        <div className="platinumGrid">
          <h3>Platinum Sponsors</h3>
        </div>
      </section>
      <section className="storyBlock">
        <div className="platinumGrid">
          <img
            src="https://sponsors.vuejs.org/images/storyblok.png/"
            alt="storyblok"
          />
        </div>
      </section>
      <section>
        <div className="platinumGrid">
          <h3>Gold Sponsors</h3>
        </div>
      </section>
      <section className="sponsorscollection">
        <div className="sponsorsIcon">
          <img
            src="https://sponsors.vuejs.org/images/tailwind_labs.svg"
            alt="tailwind"
            className="sponsorimg"
          />
        </div>
        <div className="sponsorsIcon"></div>
        <div className="sponsorsIcon">
          <img
            src="https://sponsors.vuejs.org/images/vue_jobs.png"
            alt="vue"
            className="sponsorimg"
          />
        </div>
        <div className="sponsorsIcon">
          <img
            src="https://sponsors.vuejs.org/images/divriots.png"
            alt="divriots"
            className="sponsorimg"
          />
        </div>
        <div className="sponsorsIcon">
          <img
            src="https://sponsors.vuejs.org/images/prefect_io.svg"
            alt="perfect"
            className="sponsorimg"
          />
        </div>
      </section>
    </>
  );
}

export default App;
