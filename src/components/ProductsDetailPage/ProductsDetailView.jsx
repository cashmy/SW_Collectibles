import React, { useEffect, useState } from 'react';
import "./ProductDetailView.css";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ServiceLayer from '../../Services/serviceLayer';
import { Button } from '@material-ui/core';


function ProductsDetailView(props) {
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([])
    const [item, setItem] = useState(props.product)

    useEffect(() => {
        getProducts();
        getReviews();
        console.log(item)
    }, [props])

    async function getProducts(e){
        try{
            const response = await ServiceLayer.getAllProducts();
            setProducts(response.data);
        }
        catch(e){
            console.log('API call unsuccessful', e)
        }
    }

    async function getReviews(e){
        try{
            const response = await ServiceLayer.getAllReviews();
            setReviews(response.data);
        }catch(e){
            console.log('API call unsuccessful', e)
        }
    }

    return (
        <div>
        <Grid container direction="row" spacing={5} style={{marginTop: "2rem"}}></Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                <Grid container item xs={4} spacing={3} className="grid" direction='column' alignItems="center" justify="center">
                    <div >
                        <img src="https://i5.walmartimages.com/asr/49edcb9d-ea4b-48bc-b181-5844578528c1_1.e5e95a3e011bab74d0df2d9dae924a86.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="Collectible Item" className="product__img"/>
                    </div>
                
                </Grid>
                <Grid container item xs={4} spacing={3} justify="center" alignItems="center" className="grid" id="midProductDetailGrid">
                    {products ? products.map((product,i) => {
                        while(i == 0){
                            return (
                                <div key={i} style={{textAlign: 'center'}}>
                                    <h2 className="product__title">Han Solo Action Figure </h2>
                                    <p>{product.productDescription}</p>
                                </div>
                            )
                        }
                    }): <></>}
                </Grid>
                <Grid container item xs={4} spacing={3} zeroMinWidth justify="center" alignItems="center" className="grid">
                {products ? products.map((product,i) => {
                        while(i == 0){
                            return (
                                <div key={i} className="product__details-right">
                                        <ul style={{listStyle:"none"}}>
                                            <li>Price: ${product.productPrice}</li>
                                            <li>Rating: {product.productAverageRating} out of 5</li>
                                            <li>Inventory: {product.quantityOnHand} remaining!</li>
                                            <li><Button style={{backgroundColor: '#9C27B0'}} className="addToCart__btn" variant="outlined" >Add To Cart</Button></li>
                                        </ul>
                                </div>
                            )
                        }
                    }): <></>}

                    
                </Grid>
            </Grid>
        <Grid container direction="row" spacing={1} style={{margin: "2rem"}}>
            <div>
                <h3>Reviews</h3>
                <form noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="review"
                    label="Add A Review"
                    name="review"
                    //value={}
                    //onChange={}
                    autoComplete="email"
                    autoFocus
                    />
                </form>
                {reviews ? reviews.map((review, i) => {
                                while(i == 0){
                                    return (
                                        <div key={i} className="product__reviews">
                                            <Typography noWrap>
                                            <span><span>UserName: </span>{review.reviewText}&nbsp;&nbsp;<span>  UserRating: {review.reviewRating} out of 5</span></span>
                                            </Typography>
                                        </div>
                                    )
                                }
                            }): <></>}
            </div>
        </Grid>
        </div>
    )
}

export default ProductsDetailView


