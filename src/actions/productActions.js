import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types' 
import axiosClient from '../config/axios'
import swal from 'sweetalert2'

// Create new products
export function createNewProductAction(product){
    return async (dispatch) =>{
        dispatch(addProduct())

        try {
            //api insert
          await axiosClient.post('/products', product)

            dispatch(addProductSuccess(product))

            swal.fire(
                'Success',
                'Product Added Successfully',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch(addProductError(true))
            // Error alert
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error Try Again'
            })
        }
    }
}

const addProduct = () =>({
    type: ADD_PRODUCT,
    payload: true
})

//if product database saved
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

//if product database saved error
const addProductError = e =>({
    type:ADD_PRODUCT_ERROR,
    payload: e
})