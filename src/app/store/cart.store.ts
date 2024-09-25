import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { product } from "../models/product";

export interface CartState{
    products: product[]
}

const initialState: CartState = {
    products:[]
}


export const CartStore = signalStore(
    withState(initialState),
    withMethods(({products, ...store}) =>({
        addToCart(product: product){
            const updatedProduct = [...products(), product];
            patchState(store, {products: updatedProduct});
        },
        removeItem(id: string){
            const updatedProduct = products().filter(product => product.id != id);
            patchState(store, {products: updatedProduct});
        }
    }))
)