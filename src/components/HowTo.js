import React, { useEffect, useRef } from "react";

function HowItWorks() {
  const appShotsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this value as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-img");
        } else {
          entry.target.classList.remove("animate-img");
        }
      });
    };

    appShotsRef.current = document.querySelectorAll(".mobile-bg");
    const scrollObserver = new IntersectionObserver(
      handleIntersection,
      options
    );

    appShotsRef.current.forEach((appShot) => {
      scrollObserver.observe(appShot);
    });
    return () => {
      appShotsRef.current.forEach((appShot) => {
        scrollObserver.unobserve(appShot);
      });
    };
  }, []);

  return (
    <section className="section-how" id="learn">
      <h1 className="subheading">How It Works</h1>
      <h2 className="body-heading">
        Your daily dose of health <br />
        in <span>3</span> simple steps
      </h2>
      <div className="how-full-wrapper">
        <div className="how-text-wrapper">
          <h3 className="how-step-num">01</h3>
          <p className="how-heading">
            Tell us what you like &<span> what you don't</span>
          </p>
          <p className="how-desc">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="how-img-wrapper">
          <div className="mobile-bg animate-img">
            <img
              src={require("../assets/app/app-1.png")}
              alt="screenshot of adding meal preferences on the mobile app"
            />
          </div>
        </div>
      </div>
      <div className="how-full-wrapper-switch">
        <div className="how-text-wrapper">
          <h3 className="how-step-num">02</h3>
          <p className="how-heading">Approve your weekly meal plan</p>
          <p className="how-desc">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div className="how-img-wrapper">
          <div className="mobile-bg animate-img">
            <img
              src={require("../assets/app/app-2.png")}
              alt="screenshot of the mobile app's weekly meal plan section"
            />
          </div>
        </div>
      </div>
      <div className="how-full-wrapper">
        <div className="how-text-wrapper">
          <h3 className="how-step-num">03</h3>
          <p className="how-heading">Receive meals at convenient time</p>
          <p className="how-desc">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="how-img-wrapper">
          <div className="mobile-bg animate-img">
            <img
              src={require("../assets/app/app-3.png")}
              alt="screenshot of what time and what meals will arrive on the mobile app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
