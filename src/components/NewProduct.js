import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

//Actions redux
import {createNewProductAction} from '../actions/productActions'

const NewProduct = ({history}) => {
    //state of component
    const [name, saveName] = useState('')
    const [price, savePrice] = useState()

     //useDispatch
     const dispatch = useDispatch();

    //store state
    const load = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)

    console.log(load)

    //call action from product action
     const addProduct = (product) => dispatch(createNewProductAction(product))

    //When user makes submit
    const submitNewProduct = e => {
        e.preventDefault();
        
        //Form Validate
        if(name.trim === '' || price <= 0){
            return
        }

        //if no mistakes
        
        //create new product
        addProduct({
            name,
            price
        })
        history.push('/')
    }

    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                   <h2>Add New Product</h2>
                   <form
                    onSubmit={submitNewProduct}
                   >
                       <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            name="name"
                            value={name}
                            onChange={e => saveName(e.target.value)}
                        />
                       </div>
                       <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Product Price"
                            name="price"
                            value={price}
                            onChange={e => savePrice( Number(e.target.value))}
                        />
                       </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                            Add
                        </button>
                   </form>
                   {load ?  <p>Loading...</p> : null }
                   {error ? <p className="alert alert-danger p-2 mt-4 text-center">Error</p> : null}
                   </div>
               </div>
           </div>
       </div>
     );
}
 
export default NewProduct;
