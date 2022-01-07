import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = '[ShoppingList] Add Ingredient';

export const ADD_INGREDIENTS = '[ShoppingList] Add Ingredients';

export const UPDATE_INGREDIENT = '[ShoppingList] Update Ingredient';

export const DELETE_INGREDIENT = '[ShoppingList] Delete Ingredient';

export const START_EDITING = '[ShoppingList] Start Editing';

export const STOP_EDITING = '[ShoppingList] Stop Editing';

export type ShoppingListActions =
  AddIngredient 
 | AddIngredients 
 | UpdateIngredient 
 | DeleteIngredient
 | StartEditing
 | StopEditing;


export class AddIngredient implements Action {
   readonly type = ADD_INGREDIENT;
    
    constructor(public playload: Ingredient) {}
};

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
     
     constructor(public playload: Ingredient[]) {}
 };
 
 export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;
     
     constructor(public playload: Ingredient ) {}
 };
 
 export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
 };
 
 export class StartEditing implements Action {
    readonly type = START_EDITING;
     
     constructor(public playload: number) {}
 };

 export class StopEditing implements Action {
    readonly type = STOP_EDITING;
 };