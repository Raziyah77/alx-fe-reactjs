import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/delete/:id" element={<DeleteRecipeButton />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
