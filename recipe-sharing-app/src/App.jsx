import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      {/* Recipes list should already exist */}

      <FavoritesList />

      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      <RecommendationsList />
    </div>
  );
}

export default App;
