import { actions } from "./actions";

const INITIAL_STATE = {
    products: [],
    inLoading: false,
    isAlert : false,
    cartProducts: [],
    purchases: [],
    category: []
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

            case actions.setProducts:
                return{
                    ...state,
                    products: action.payload
                }

            case actions.setIsLoading:
                return{
                    ...state,
                    isLoading: action.payload
                }
        
            case actions.setCartproduct:
                return{
                    ...state,
                    cartProducts: action.payload
                }
            case actions.setAlert:
                return{
                    ...state,
                    isAlert: action.payload
                }
            case actions.setUserPurchases:
                return{
                    ...state,
                    purchases: action.payload
                }
            case actions.setCategories:
                return{
                    ...state,
                    category: action.payload
                }
            default:
                return state;
    }
}

export default reducer;