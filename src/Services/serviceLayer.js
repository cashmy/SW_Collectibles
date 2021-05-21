import axios from 'axios';

class ServiceLayer {

    // Example to get Token
    jwt = localStorage.getItem('token')
    //return http.post('authentication/login',{headers: {Authorization: 'Bearer ' + jwt}}, data);

    // Request for User
    registerUser(data){
        return axios.post('https://localhost:44394/api/authentication/register', data);
    }

    userLogin(data){
        
        return axios.post('https://localhost:44394/api/authentication/login', data);
    }

    getAllUsers(){
        return axios.get('https://localhost:44394/api/user/allUsers');
    }

    getUser(){
        return axios.get('https://localhost:44394/api/user');
    }

    editUser(data){
        const jwt = localStorage.getItem('token')
        return axios.put('https://localhost:44394/api/user', data, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    deleteUser(){
        const jwt = localStorage.getItem('token')
        return axios.delete('https://localhost:44394/api/user', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Products

    getAllProducts(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/Products', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    getProductById(productId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/Products/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    addProduct(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/Products`, data , {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Products Review

    getAllReviews(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/ProductReview',{headers: {Authorization: 'Bearer ' + jwt}});
    }

    getUserReviews(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/ProductReview/user', {headers: {Authorization: 'Bearer ' + jwt}} );
    }

    getReviewByProductId(productId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/ProductReview/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    editReview(productId, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/ProductReview/${productId}/review`, data, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    addRating(id, productId, data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/ProductReview/rating/${id}/${productId}`, data, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    addReview(id, productId, data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/ProductReview/review/${id}/${productId}`, data, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    deleteReview(productId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/ProductReview/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Category

    getCategories(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/Category', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    createCategory(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/Category`,  data,  {headers: {Authorization: 'Bearer ' + jwt}});
    }

    deleteCategory(categoryId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/Category/${categoryId}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    //Request for ShoppingCart

    getItemCount(){
        const jwt = localStorage.getItem('token')
        // returns {count: <int>}
        return axios.get('https://localhost:44394/api/ShoppingCart/count', {headers: {Authorization: 'Bearer ' + jwt}});
    }
    
    getUserCart(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/ShoppingCart/', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    addToCart(productId, data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/ShoppingCart/${productId}`, data, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    editCart(productId, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/ShoppingCart/${productId}`, data, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    deleteCart(productId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/ShoppingCart/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for SupplierProducts
    getSupplierProducts(){
        return axios.get('https://localhost:44394/api/SupplierProducts');
    }

    createSupplierProducts(data){
        const jwt = localStorage.getItem('token')
        return axios.post('https://localhost:44394/api/SupplierProducts', data, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    deleteSupplierProducts(productId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/SupplierProducts/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Order Details
    getOrderDetails(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/OrderDetail', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    getOrderDetailById(orderId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderDetail/${orderId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    // To be used for Seller's product analysis
    getOrderDetailByProduct(productId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderDetail/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    addOrderDetail(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/OrderDetail`, data, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    editOrderDetail(orderId, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/OrderDetail/${orderId}`, data, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    deleteOrderDetail(orderId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/OrderDetail/${orderId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Order Header
    getOrderHeader(){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderHeader`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    getOrderHeaderById(orderId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderHeader/${orderId}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    addOrderHeader(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/OrderHeader`, data, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    editOrderHeader(orderId, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/OrderHeader/${orderId}`, data, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    deleteOrderHeader(orderId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/OrderHeader/${orderId}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

}

export default new ServiceLayer();