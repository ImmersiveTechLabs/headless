import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name:'Products',
    initialState:{
        products: [],
        isFetching: false,
        error: false
    },
    reducers:{
        allProductsStart:(state)=>{
            state.isFetching = true; 
        },
        allProductsSuccess:(state, action)=>{
            state.isFetching = false;
            state.products = action.payload
        },
        allProductsFailure:(state, action)=>{
            state.isFetching = false;
            state.error = action.payload
        }

    }

})

export const {allProductsStart, allProductsSuccess, allProductsFailure} = productsSlice.actions;
export default productsSlice.reducer
