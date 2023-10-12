import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfinity,
  faPause,
  faRecycle,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const MemberInfoSection = () => {
  return (
    <section className="section-member-info">
      <div className="member-info-banner">
        <div className="banner-item">
          <FontAwesomeIcon className="banner-icon" icon={faInfinity} />
          <p className="banner-heading">Never cook again</p>
          <p className="banner-desc">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="banner-item">
          <FontAwesomeIcon className="banner-icon" icon={faSeedling} />
          <p className="banner-heading">Local and organic</p>
          <p className="banner-desc">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="banner-item">
          <FontAwesomeIcon className="banner-icon" icon={faRecycle} />
          <p className="banner-heading">Zero waste</p>
          <p className="banner-desc">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="banner-item">
          <FontAwesomeIcon className="banner-icon" icon={faPause} />
          <p className="banner-heading">Pause anytime</p>
          <p className="banner-desc">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemberInfoSection;
