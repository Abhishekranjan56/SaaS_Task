import React from "react";
import MealCard from "./MealsCard";

const MealsSection = () => {
  return (
    <section className="section-meals" id="meals">
      <h1 className="subheading">Custom Meals</h1>
      <h2 className="body-heading">
        Omnifood AI chooses from <br />
        <span>5000+</span> unique recipes
      </h2>
      <div className="meal-card-overview">
        <MealCard
          imageSrc={require("../assets/meals/meal-1.jpg")}
          altText="japanese gyozas on a plate"
          mealTypes={["Lactose-Free", "Vegan", "Keto"]}
          heading="Japanese Gyozas"
          description="Juicy pork, cabbage, scallions, and shiitake mushrooms with a rich Ponzu sauce drizzle."
          calories="650"
          nutriScore="74"
          rating="4.6 (201)"
        />
        <MealCard
          imageSrc={require("../assets/meals/meal-2.jpg")}
          altText="avocado salad bowl"
          mealTypes={["Paleo", "Vegan", "Gluten-Free"]}
          heading="Avocado Salad"
          description="Healthy green salad with fresh avocado, spinach, tomatoes and citrus lime dressing."
          calories="400"
          nutriScore="92"
          rating="4.8 (441)"
        />
        <MealCard
          imageSrc={require("../assets/meals/meal-4.jpeg")}
          altText="summer pasta salad bowl"
          mealTypes={["Vegetarian", "Kid-Friendly"]}
          heading="Summer Pasta Salad"
          description="Classic pasta salad with fresh veggies and herbs, and plenty of feta cheese."
          calories="630"
          nutriScore="87"
          rating="4.7 (323)"
        />
        <MealCard
          imageSrc={require("../assets/meals/meal-3.png")}
          altText="chicken caesar cobb salad"
          mealTypes={["Paleo", "Keto", "Low FODMAP"]}
          heading="Chicken Caesar Cobb"
          description="Grilled chicken, fresh avocado with veggie toppings and creamy caesar dressing."
          calories="410"
          nutriScore="93"
          rating="4.9 (691)"
        />
      </div>
      <div className="meal-types-overview">
        Flexible meal plans for <span>any</span> and <span>every</span> dietary
        preference
        <ul className="meal-types-list">
          <li className="paleo">Paleo</li>
          <li className="vegetarian">Vegetarian</li>
          <li className="gluten-free">Gluten-Free</li>
          <li className="lactose-free">Lactose-Free</li>
          <li className="keto">Keto</li>
          <br />
          <li className="pesca">Pescatarian</li>
          <li className="vegan">Vegan</li>
          <li className="fodmap">Low FODMAP</li>
          <li className="kid-friendly">Kid-Friendly</li>
        </ul>
      </div>
    </section>
  );
};

export default MealsSection;
