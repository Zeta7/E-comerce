import axios from "axios";

export const actions = {
    setProducts : "SET_PRODUCTS",
    setIsLoading: "SET_IS_LOADING",
    setAlert: "SET_ALERT",
    setSearchProduct: "SET_SEARCH_PRODUCT",
    setCartproduct: "SET_CART_PRODUCTS",
    setUserPurchases: "SET_USER_PURCHASES",
    setCategories: "SET_CATEGORIES"
    
}

//----------------- token -----------------------------------------------//
const getConfigToken = () =>(
    {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
)
//----------------- alert------------------------------------------------//
export const setAlert = params =>(
    {
        type: actions.setAlert,
        payload: params
    }
)
export const getAlert = params =>{
    return dispatch=>{
        dispatch(setAlert(params));
    }
}

//------------------------------------------------------------------------//
export const setIsLoading = isLoading =>(
    {
        type: actions.setIsLoading,
        payload: isLoading
    }
)

//---------------- Productos --------------------------------------------//
export const SetProducts = products =>(
    {
        type: actions.setProducts, 
        payload: products
    }
)

export const getProductsThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then(res => dispatch(SetProducts(res.data.data.products)))
        .finally(()=>{
            dispatch(setIsLoading(false));
        })
    }
}

// ------------------- search product -----------------------------------//

export const setSearchProduct = products =>(
    {
        type: actions.setProducts, 
        payload: products
    }
)

export const getSearchProductThunk = searchProduct =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?query=${searchProduct}`)
        .then(res => {
            dispatch(SetProducts(res.data.data.products))
        })
        .finally(()=> dispatch(setIsLoading(false)))
    }
}

//----------------------- add cart product -----------------------------//
export const addCartThunk = product =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', product, getConfigToken())
        .then(res=>console.log("se agrego correctamente el producto"))
        .catch(error => console.log(error.response))
        .finally(()=> dispatch(setIsLoading(false)))
    }
}

// -------------------- set cart products -------------------------------//
export const setCartProducts = products =>(
    {
        type: actions.setCartproduct, 
        payload: products
    }
)

// --------------------- get cart products --------------------------------//
export const getCartProductThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfigToken())
        .then(res=>{
            dispatch(setCartProducts(res.data.data.cart.products));
        })
        .catch(error=>console.log(error))
        .finally(()=>dispatch(setIsLoading(false)))
    }
}

//-----------------------Delete cart product -----------------------------//
export const deleteCartProduct = id =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,  getConfigToken())
        .then(res=>console.log("se elimino el producto de carrito"))
        .finally(()=> {
            dispatch(getCartProductThunk());
            dispatch(setIsLoading(false))
        });
    }
}
//======================== Pucharses ====================================//

//---------------------execute Pucharses --------------------------------//
export const esxcutePucharse = data =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, data, getConfigToken())
        .then(res=>console.log("se realizo la compra con exito"))
        .catch(error =>{
            console.log(error.response);
        })
        .finally(()=> {
            dispatch(getCartProductThunk());
            dispatch(setIsLoading(false));
        });
    }
}
//---------------------- set Pucharses ---------------------------------//
export const setUserPurchases = params =>(
    {
        type: actions.setUserPurchases,
        payload: params
    }
)
//--------------------- get pucharses ----------------------------------//
export const getUserPurchases = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfigToken())
        .then(res => {
            dispatch(setUserPurchases(res.data.data.purchases));
        })
        .catch(error => console.log(error.response))
        .finally(()=>{
            dispatch(setIsLoading(false))
        })
    }
}

//=================== Categories ===============================================//
//------------------------- set Categories ------------------------------------//
export const setCategories = category =>(
    {
        type: actions.setCategories, 
        payload: category
    }
)
//-------------------------- list Categories -------------------------------------//
export const getCategoriesThunk = () =>{
    return dispatch =>{
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
                .then(res=>{
                    dispatch(setCategories(res.data.data.categories));
                })
                .catch(error => {
                    console.log(error.response);
                })
    }
}
//-------------------------buscar Categories products -------------------------------------//
export const searchCategoriesThunk = id =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`)
        .then(res => {
            dispatch(SetProducts(res.data.data.products))
        })
        .catch(error => {
            console.log(error.response);
        })
        .finally(()=> dispatch(setIsLoading(false)))
    }
}