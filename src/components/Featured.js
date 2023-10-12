import React from "react";

function FeaturedLogos() {
  return (
    <section className="featured-logos">
      <img
        src={require("../assets/social-proof/forbes.png")}
        alt="forbes logo"
      />
      <img
        src={require("../assets/social-proof/the-new-york-times.png")}
        alt="new york times logo"
      />
      <img
        src={require("../assets/social-proof/techcrunch.png")}
        alt="techcrunch logo"
      />
      <img
        src={require("../assets/social-proof/business-insider.png")}
        alt="business insider logo"
      />
      <img
        src={require("../assets/social-proof/usa-today.png")}
        alt="usa today logo"
      />
    </section>
  );
}

export default FeaturedLogos;
