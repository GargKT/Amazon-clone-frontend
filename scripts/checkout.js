import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import {  loadCartFetch} from "../data/cart.js";
// import '../data/cart-class.js';
// import "../data/backend-practice.js";


async function loadPage() {
    try{
        await loadProductsFetch();
        await loadCartFetch();
        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ]);
    } catch(error){
        console.log('errir. Please try again later! ')
    }
    

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();




/*Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(()=>{
            resolve();
        });
    }),
]).then( (values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});



/*new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(()=>{
    return new Promise((resolve) => {
        loadCart(()=>{
            resolve();
        });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

/*loadProducts(()=>{
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});\
*/





