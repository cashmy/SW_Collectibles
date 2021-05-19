import http from './axios';

class ServiceLayer {

    // Example to get Token
     //jwt = localStorage.getItem('token')
    //return http.post('authentication/login',{headers: {Authorization: 'Bearer ' + jwt}}, data);

    // Request for User
    registerUser(data){
        return http.post('authentication', data);
    }

    userLogin(data){
        
        return http.post('authentication/login', data);
    }

    

    getAllUsers(){
        return http.get('user/allUsers');
    }

    getUser(id){
        return http.get(`user/${id}/get`);
    }

    setUserRole(id){
        return http.post(`user/${id}/setRole`);
    }

    deleteUser(id){
        return http.delete(`user/${id}/delete`);
    }

    //Request for Products

    getAllProducts(){
        return http.get('Products');
    }

    addProduct(data){
        return http.post(`Products`, data);
    }

    //Request for Products Review

    getAllReviews(){
        return http.get('ProductReview');
    }

    getUserReviews(id){
        return http.get(`ProductReview/${id}/userReviews`);
    }

    editReview(id, productId, data){
        return http.put(`ProductReview/${id}/${productId}/review`, data);
    }

    createReview(data){
        return http.post('ProductReview/create', data);
    }

    deleteReview(id, productId){
        return http.delete(`ProductReview/${id}/${productId}/deleteReview`);
    }

    //Request for Category

    getCategories(){
        return http.get('Category');
    }

    createCategory(data){
        return http.post(`Category`, data);
    }

    deleteCategory(id){
        return http.delete(`Category/${id}`)
    }

    //Request for ShoppingCart
    
    getUserCart(id){
        return http.get(`ShoppingCart/${id}/cart`);
    }

    addToCart(id, data){
        return http.post(`ShoppingCart/${id}/postCart`)
    }

    editCart(id, productId, data){
        return http.put(`ShoppingCart/${id}/${productId}/edit`, data);
    }

    deleteCart(id, productId){
        return http.delete(`ShoppingCart/${id}/${productId}/delete`);
    }

    //Request for SupplierProducts
    getSupplierProducts(){
        return http.get('SupplierProducts');
    }

    createSupplierProducts(id, productId, data){
        return http.post(`SupplierProducts/${id}/${productId}`, data);
    }

    deleteSupplierProducts(id, productId){
        return http.delete(`SupplierProducts/${id}/${productId}`);
    }
}

export default new ServiceLayer();