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
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/user/${id}/setRole`);
    }

    deleteUser(id){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/user/${id}/delete`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Products

    getAllProducts(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/Products', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    getProductById(id){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/Products/${id}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    addProduct(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/Products`,{headers: {Authorization: 'Bearer ' + jwt}},  data);
    }

    //Request for Products Review

    getAllReviews(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/ProductReview',{headers: {Authorization: 'Bearer ' + jwt}});
    }

    getUserReviews(userId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/ProductReview/${userId}`, {headers: {Authorization: 'Bearer ' + jwt}} );
    }

    getReviewByProductId(productId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/ProductReview/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    editReview(id, productId, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/ProductReview/${id}/${productId}/review`, {headers: {Authorization: 'Bearer ' + jwt}},  data);
    }

    createReview(data){
        const jwt = localStorage.getItem('token')
        return axios.post('https://localhost:44394/api/ProductReview/create', {headers: {Authorization: 'Bearer ' + jwt}}, data);
    }

    deleteReview(id, productId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/ProductReview/${id}/${productId}/deleteReview`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Category

    getCategories(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/Category', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    createCategory(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/Category`, {headers: {Authorization: 'Bearer ' + jwt}},  data);
    }

    deleteCategory(id){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/Category/${id}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    //Request for ShoppingCart
    
    getUserCart(id){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/ShoppingCart/${id}/cart`,{headers: {Authorization: 'Bearer ' + jwt}});
    }

    addToCart(id, data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/ShoppingCart/${id}/postCart`, {headers: {Authorization: 'Bearer ' + jwt}}, data)
    }

    editCart(id, productId, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/ShoppingCart/${id}/${productId}/edit`, {headers: {Authorization: 'Bearer ' + jwt}},  data);
    }

    deleteCart(id, productId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/ShoppingCart/${id}/${productId}/delete`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for SupplierProducts
    getSupplierProducts(){
        return axios.get('https://localhost:44394/api/SupplierProducts');
    }

    createSupplierProducts(id, productId, data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/SupplierProducts/${id}/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}}, data);
    }

    deleteSupplierProducts(id, productId){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/SupplierProducts/${id}/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Order Details
    getOrderDetails(){
        const jwt = localStorage.getItem('token')
        return axios.get('https://localhost:44394/api/OrderDetail', {headers: {Authorization: 'Bearer ' + jwt}});
    }

    getOrderDetailById(id){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderDetail/${id}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    getOrderDetailByProduct(productId){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderDetail/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    addProduct(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/OrderDetail`, {headers: {Authorization: 'Bearer ' + jwt}}, data);
    }

    editOrderDetail(id, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/OrderDetail/${id}`, {headers: {Authorization: 'Bearer ' + jwt}}, data);
    }

    deleteOrderDetail(id){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/OrderDetail/${id}`, {headers: {Authorization: 'Bearer ' + jwt}});
    }

    //Request for Order Header
    getOrderHeader(){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderHeader`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    getOrderHeaderById(id){
        const jwt = localStorage.getItem('token')
        return axios.get(`https://localhost:44394/api/OrderHeader/${id}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

    addOrderHeader(data){
        const jwt = localStorage.getItem('token')
        return axios.post(`https://localhost:44394/api/OrderHeader`, {headers: {Authorization: 'Bearer ' + jwt}}, data)
    }

    editOrderHeader(id, data){
        const jwt = localStorage.getItem('token')
        return axios.put(`https://localhost:44394/api/OrderHeader/${id}`, {headers: {Authorization: 'Bearer ' + jwt}}, data)
    }

    deleteOrderHeader(id){
        const jwt = localStorage.getItem('token')
        return axios.delete(`https://localhost:44394/api/OrderHeader/${id}`, {headers: {Authorization: 'Bearer ' + jwt}})
    }

}

export default new ServiceLayer();