import React, { useEffect, useState } from 'react';
import "./ProductDetailView.css";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ServiceLayer from '../../Services/serviceLayer';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

function ProductsDetailView(props) {
    const [product, setProduct] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating ] = useState(null);
    const [hover, setHover] = useState(null);

    let url = props.location.pathname;
    let urlSplit = url.split("/");
    const productId = parseInt(urlSplit[2]);

    useEffect(() => {
        getProduct(productId);
        getReviews(productId);
    }, [])

    async function getProduct(id){
        try{
            const response = await ServiceLayer.getProductById(id);
            setProduct(response.data);
        }
        catch(e){
            console.log('API call unsuccessful', e.response.data)
        }
    }

    async function getReviews(id){
        try{
            const response = await ServiceLayer.getReviewByProductId(id);
            setReviews(response.data);
        }catch(e){
            console.log('API call unsuccessful', e)
        }
    }

    async function addRating(id){
        try{

        }
        catch(e){
            console.log('API call unsuccessful', e)
        }
    }

    const mapProductName = (i) => {
        if(product){
            return (
                <div style={{textAlign: 'center'}}>
                    <h2 className="product__title">{product.productName}</h2>
                    <p >{product.productDescription}</p>
                </div>
            )
        }
    }

    const mapProductDetails = () => {
        if (product){
            return (
                <div className="product__details-right" >
                    <ul style={{listStyle:"none"}}>
                        <li>Price: ${product.productPrice}</li>
                        <li>Rating: {product.productAverageRating} out of 5</li>
                        <li>Inventory: {product.quantityOnHand} remaining!</li>
                        <li><Button style={{backgroundColor: '#9C27B0'}} className="addToCart__btn" variant="outlined" >Add To Cart</Button></li>
                    </ul>
                </div>
            )
        }
    }

    const mapReviews = () => {
        return (
            reviews.map((review, i) => (
                <div key={i} className="product__reviews">
                    <Typography noWrap>
                    <span><span>UserName: </span>{review.reviewText}&nbsp;&nbsp;<span>  UserRating: {review.reviewRating} out of 5</span></span>
                    </Typography>
                </div>
            ))

        )
    }

    const starRating = () => {
        
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                            <div key={i}>
                                <label>
                                    <input  type='radio' name='rating' value={ratingValue} onClick={()=>setRating(ratingValue)} />
                                    <StarIcon className='star' 
                                    fontSize='large' 
                                    color={ratingValue <= (hover || rating) ? 'primary' : 'secondary'} 
                                    onMouseEnter={()=>setHover(ratingValue)} 
                                    onMouseLeave={()=>setHover(null)}
                                    
                                    />
                                </label>
                            </div>
                );
                })}
            </div>
        )
    }

    return (
        <div>
        <Paper>
        <Grid container direction="row" spacing={5} style={{marginTop: "2rem"}}></Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                <Grid container item xs={4} spacing={3} className="grid" direction='column' alignItems="center" justify="center">
                    <div >    
                        <img src="https://i5.walmartimages.com/asr/49edcb9d-ea4b-48bc-b181-5844578528c1_1.e5e95a3e011bab74d0df2d9dae924a86.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="Collectible Item" className="product__img"/>
                        {starRating()}
                    </div>
                    
                
                </Grid>
                <Grid container item xs={4} spacing={3} justify="center" alignItems="center" className="grid" id="midProductDetailGrid">
                    {mapProductName()}
                </Grid>
                <Grid container item xs={4} spacing={3} zeroMinWidth justify="center" alignItems="center" className="grid">
                    {mapProductDetails()}
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
                {mapReviews()}
            </div>
        </Grid>
        </Paper>
        </div>
        
    )
}

export default ProductsDetailView


