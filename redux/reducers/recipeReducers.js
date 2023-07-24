import { GENERATE_RANDOM_RECIPES, SEARCH_RECIPES, GET_RECIPE_DETAIL, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from '../actionTypes';

const initialState = {
    randomRecipes: [],
    searchRecipes: [],
    recipeDetail: {},
    addFav: []
};

export default function reducers(state = initialState, action) {
    switch(action.type) {
        case GENERATE_RANDOM_RECIPES:
            return {
                ...state,
                randomRecipes: action.payload
            };
        case SEARCH_RECIPES:
            return {
                ...state,
                searchRecipes: action.payload
            };
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: action.payload
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                addFav: [...state.addFav, action.payload]
            };
            case REMOVE_TO_FAVORITES:
                return {
                    ...state,
                    addFav: state.addFav.filter((item) => item.id !== action.payload.id)
                }
        default:
            return state;
    }
}
