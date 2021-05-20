import axios from 'axios';

class ServiceLayer {

    // Example to get Token
     //jwt = localStorage.getItem('token')
    //return http.post('authentication/login',{headers: {Authorization: 'Bearer ' + jwt}}, data);

    // Request for User
    registerUser(data){
        return axios.post('https://localhost:44394/api/authentication', data);
    }

    userLogin(data){
        
        return axios.post('https://localhost:44394/api/authentication/login', data);
    }

    getAllUsers(){
        return axios.get('https://localhost:44394/api/user/allUsers');
    }

    getUser(id){
        return axios.get(`https://localhost:44394/api/user/${id}/get`);
    }

    editUser(id, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/user/${id}/edit`,{headers: {Authorization: 'Bearer ' + jwt}}, data);
    }

    setUserRole(id){
        return axios.post(`https://localhost:44394/api/user/${id}/setRole`);
    }

    deleteUser(id){
        return axios.delete(`https://localhost:44394/api/user/${id}/delete`);
    }

    //Request for Products

    getAllProducts(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/Products');
    }

    addProduct(data){
        return axios.post(`https://localhost:44394/api/Products`, data);
    }

    //Request for Products Review

    getAllReviews(){
        return axios.get('https://localhost:44394/api/ProductReview');
    }

    getUserReviews(id){
        return axios.get(`https://localhost:44394/api/ProductReview/${id}`);
    }

    editReview(id, productId, data){
        return axios.put(`https://localhost:44394/api/ProductReview/${id}/${productId}/review`, data);
    }

    createReview(data){
        return axios.post('https://localhost:44394/api/ProductReview/create', data);
    }

    deleteReview(id, productId){
        return axios.delete(`https://localhost:44394/api/ProductReview/${id}/${productId}/deleteReview`);
    }

    //Request for Category

    getCategories(){
        return axios.get('https://localhost:44394/api/Category');
    }

    createCategory(data){
        return axios.post(`https://localhost:44394/api/Category`, data);
    }

    deleteCategory(id){
        return axios.delete(`https://localhost:44394/api/Category/${id}`)
    }

    //Request for ShoppingCart
    
    getUserCart(id){
        return axios.get(`https://localhost:44394/api/ShoppingCart/${id}/cart`);
    }

    addToCart(id, data){
        return axios.post(`https://localhost:44394/api/ShoppingCart/${id}/postCart`, data)
    }

    editCart(id, productId, data){
        return axios.put(`https://localhost:44394/api/ShoppingCart/${id}/${productId}/edit`, data);
    }

    deleteCart(id, productId){
        return axios.delete(`https://localhost:44394/api/ShoppingCart/${id}/${productId}/delete`);
    }

    //Request for SupplierProducts
    getSupplierProducts(){
        return axios.get('https://localhost:44394/api/SupplierProducts');
    }

    createSupplierProducts(id, productId, data){
        return axios.post(`https://localhost:44394/api/SupplierProducts/${id}/${productId}`, data);
    }

    deleteSupplierProducts(id, productId){
        return axios.delete(`https://localhost:44394/api/SupplierProducts/${id}/${productId}`);
    }

    //Request for Order Details
    getOrderDetails(){
        return axios.get('https://localhost:44394/api/orderDetail')
    }

    getOrderDetailById(id){
        return axios.get(`https://localhost:44394/api/OrderDetails/${id}`)
    }

    getOrderDetailByProduct(productId){
        return axios.get(`https://localhost:44394/api/OrderDetails/${productId}`)
    }

    addProduct(data){
        return axios.post(`https://localhost:44394/api/OrderDetails`, data)
    }

    editOrderDetail(id, data){
        return axios.put(`https://localhost:44394/api/OrderDetails/${id}`, data)
    }

    deleteOrderDetail(id){
        return axios.delete(`https://localhost:44394/api/OrderDetails/${id}`)
    }

    //Request for Order Header
    getOrderHeader(){
        return axios.get(`https://localhost:44394/api/OrderHeader`)
    }

    getOrderHeaderById(id){
        return axios.get(`https://localhost:44394/api/OrderHeader/${id}`)
    }

    addOrderHeader(data){
        return axios.post(`https://localhost:44394/api/OrderHeader`, data)
    }

    editOrderHeader(id, data){
        return axios.put(`https://localhost:44394/api/OrderHeader/${id}`, data)
    }

    deleteOrderHeader(id){
        return axios.delete(`https://localhost:44394/api/OrderHeader/${id}`)
    }

}

export default new ServiceLayer();