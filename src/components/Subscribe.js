import React, { useState } from "react";

const SubscribeSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedPlan !== "") {
      setSubmissionMessage(
        `Thank you for your interest in the ${selectedPlan} plan, ${name}. Unfortunately, Omnifood is a fictional company so there's no free meal to send you.`
      );
    } else {
      setSubmissionMessage("Sorry, you need to choose a plan to proceed!");
    }
  };

  return (
    <section className="section-subscribe" id="subscribe">
      <div className="subscribe-box">
        <div className="subscribe-img"></div>

        <div className="subscribe-form">
          <h1 className="subscribe-heading">Get your first meal for free!</h1>
          <p className="subscribe-desc">
            Healthy, tasty and hassle-free meals are waiting for you. Starting
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <form id="form-subscribe-element" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="user-name">Name</label>
              <input
                type="text"
                id="user-name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="user-email">Email</label>
              <input
                type="email"
                id="user-email"
                placeholder="john@doe.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="user-plan">
                Which plan interests you the most?
              </label>
              <select
                name="plans"
                id="user-plan"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              >
                <option value="" disabled={true} selected={true}>
                  Please Choose One
                </option>
                <option value="Starter">Starter</option>
                <option value="Complete">Complete</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div>
              <button className="subscribe-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <p className="submission">{setSubmissionMessage}</p>
          {console.log(submissionMessage)}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
