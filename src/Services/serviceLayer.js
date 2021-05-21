import axios from 'axios';

class ServiceLayer {

    // Example to get Token
     //jwt = localStorage.getItem('token')
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

    getProductById(id){
        return axios.get(`https://localhost:44394/api/Products/${id}`)
    }

    addProduct(data){
        return axios.post(`https://localhost:44394/api/Products`, data);
    }

    //Request for Products Review

    getAllReviews(){
        return axios.get('https://localhost:44394/api/ProductReview');
    }

    getUserReviews(userId){
        return axios.get(`https://localhost:44394/api/ProductReview/${userId}`);
    }

    getReviewByProductId(productId){
        return axios.get(`https://localhost:44394/api/ProductReview/${productId}`)
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
        return axios.get('https://localhost:44394/api/ShoppingCart/');
    }

    addToCart(id, data){
        return axios.post('https://localhost:44394/api/ShoppingCart/', data)
    }

    editCart(id, productId, data){
        return axios.put(`https://localhost:44394/api/ShoppingCart/${productId}`, data);
    }

    deleteCart(id, productId){
        return axios.delete(`https://localhost:44394/api/ShoppingCart/${productId}`);
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
        return axios.get('https://localhost:44394/api/OrderDetail');
    }

    getOrderDetailById(id){
        return axios.get(`https://localhost:44394/api/OrderDetail/${id}`);
    }

    getOrderDetailByProduct(productId){
        return axios.get(`https://localhost:44394/api/OrderDetail/${productId}`);
    }

    addProduct(data){
        return axios.post(`https://localhost:44394/api/OrderDetail`, data);
    }

    editOrderDetail(id, data){
        return axios.put(`https://localhost:44394/api/OrderDetail/${id}`, data);
    }

    deleteOrderDetail(id){
        return axios.delete(`https://localhost:44394/api/OrderDetail/${id}`);
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