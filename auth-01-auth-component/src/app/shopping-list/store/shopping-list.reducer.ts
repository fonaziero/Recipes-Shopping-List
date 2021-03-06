import { Ingredient } from './../../shared/ingredient.model';
import * as ShoppingListActions from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function ShoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [ ...state.ingredients , action.playload]
            };

        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [ ...state.ingredients , ...action.playload]
            };

        case ShoppingListActions.UPDATE_INGREDIENT:
            
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.playload
            }
            const updatedIngredients = [...state.ingredients]
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredient: null ,
                editedIngredientIndex: -1
            };

        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter( (ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }),
                editedIngredient: null ,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.START_EDITING:
            return {
                ...state,
                editedIngredient: {...state.ingredients[action.playload]} ,
                editedIngredientIndex: action.playload
            };

        case ShoppingListActions.STOP_EDITING:
            return {
                ...state,
                editedIngredient: null ,
                editedIngredientIndex: -1
            };

        default: 
        return state;
    }
}