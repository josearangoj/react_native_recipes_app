import { GENERATE_RANDOM_RECIPES, SEARCH_RECIPES, GET_RECIPE_DETAIL, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from '../actionTypes';

const random_recipe_options = {
  method: 'GET',
  url: 'https://random-recipes.p.rapidapi.com/ai-quotes/%7Bid%7D',
  headers: {
    'X-RapidAPI-Key': 'a32359f033msh2225a09ca412169p19507djsn233679f3ee48',
    'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
  }
};

export const generateRandomRecipes = () => {
  return dispatch => {
    fetch('https://random-recipes.p.rapidapi.com/ai-quotes/10', random_recipe_options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: GENERATE_RANDOM_RECIPES,
          payload: data
        });
      })
      .catch(err => console.log(err));
  };
};

const search_recipe_apiKey = '6df0a10753134a31bdb1d17a1b1bf1df';

export const searchRecipes = (query, cuisine) => {
  return dispatch => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${search_recipe_apiKey}&query=${query}&cuisine=${cuisine}&number=5`)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        dispatch({
          type: SEARCH_RECIPES,
          payload: data.results
        });
      })
      .catch(err => console.log(err));
  };
};

export const getRecipeDetail = (id) => {
  return dispatch => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${search_recipe_apiKey}&includeNutrition=false`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: GET_RECIPE_DETAIL,
          payload: data
        });
      })
      .catch(err => console.log(err));
  };
};


export const addFav = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: id
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_TO_FAVORITES,
        payload: id
    };
}
