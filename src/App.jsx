import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeImg from "./components/Image-home";
import RecipeForm from "./components/RecipeForm";
import ShoppingList from "./components/shoppingList";
import Favorites from "./components/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipecard from "./components/RecipeCard";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  function saveElement(recipe) {
    setRecipes((prev) => [...prev, recipe]);
  }

  function deleteElement(id) {
    setRecipes((prev) => {
      return prev.filter((_, index) => index !== id);
    });
  }

  return (
    <Router  basename="/CookBook-App">
      <Header />

      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-recipe-container">
                <HomeImg />
                <div className="recipe-container">
                  {recipes.map((recipe, index) => (
                    <Recipecard
                      key={index}
                      id={index}
                      title={recipe.title}
                      description={recipe.description}
                      rating={recipe.rating}
                      onDelete={() => deleteElement(index)}
                    />
                  ))}
                </div>
              </div>
            }
          />

          <Route path="/recipe-form"
            element={
              <div className="form-container">
                <RecipeForm onSave={saveElement} />
              </div>
            }
          />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
