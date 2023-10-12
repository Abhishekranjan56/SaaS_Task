import React from "react";
import TestimonialCards from "./TestimonailCard";

const TestimonialsSection = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="gallery">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <figure key={index} className="gallery-img-wrapper">
            <img
              src={require(`../assets/gallery/gallery-${index}.jpg`)}
              alt={`Image ${index}`}
            />
          </figure>
        ))}
      </div>
      <div className="testimonials">
        <h1 className="subheading heading-left">Testimonials</h1>
        <h2 className="body-heading heading-left">
          Once you <span>try</span> it, you can’t go back
        </h2>
        <div className="testimonials-details">
          <TestimonialCards
            imageSrc={require("../assets/customers/ben.jpg")}
            altText="Ben Hadley"
            rating={5}
            name="Ben Hadley"
            location="New York, NY"
            text="The AI algorithm is crazy good, it chooses the right meals for every time. It’s amazing not to worry about food anymore!"
          />
          <TestimonialCards
            imageSrc={require("../assets/customers/hannah.jpg")}
            altText="Hannah Smith"
            rating={4.5}
            name="Hannah Smith"
            location="Gettysburg, PA"
            text="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan, and packaging has no plastic."
          />
          <TestimonialCards
            imageSrc={require("../assets/customers/dave.jpg")}
            altText="Dave Bryson"
            rating={5}
            name="Dave Bryson"
            location="Los Angeles, CA"
            text="Inexpensive, healthy, and really great tasting meals without even having to order it manually. It feels truly magical."
          />
          <TestimonialCards
            imageSrc={require("../assets/customers/steve.jpg")}
            altText="Steve Miller"
            rating={5}
            name="Steve Miller"
            location="Raleigh, NC"
            text="Omnifood is a life saver! I just started a company, so there’s no time for cooking. I couldn’t live without my daily meals now!"
          />
          <TestimonialCards
            imageSrc={require("../assets/customers/customer-4.jpg")}
            altText="Jonathan Mendez"
            rating={4.5}
            name="Jonathan Mendez"
            location="New York, NY"
            text="Omnifood saves me so much time now that I don’t have to plan and prep all my meals. I’ve loved every recipe so far!"
          />
          <TestimonialCards
            imageSrc={require("../assets/customers/customer-6.jpg")}
            altText="Stephanie Brown"
            rating={5}
            name="Stephanie Brown"
            location="Los Angeles, CA"
            text="Omnifood is worth every penny. It has been accurate at getting me meals that I love (and I’m a picky eater) so I’m hooked!"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
