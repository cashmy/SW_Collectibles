import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./ProductDetailView.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ServiceLayer from '../../Services/serviceLayer';
import {Input} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import jwtDecode from 'jwt-decode';
import PageHeader from '../PageHeader/PageHeader';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';


function ProductsDetailView(props) {
    const location = useLocation();
    const productId = location.state.productId;

    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    const userId = user.id;
    const userName = user.username;

    const [product, setProduct] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [userReview, setUserReview ] = useState({
        productId: productId,
        userId: userId,
        reviewRating: null,
        reviewText: '',
        rated: false,
        edited: false
    });

    const [hover, setHover] = useState(null);

    useEffect(() => {
        getProduct(productId);
        getReviews(productId);
    }, [])

    useEffect(() => {
        // Trigger a re-render on change of reviews
    }, [reviews])

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
            console.log('API call unsuccessful', e);
        }
    }

    async function addToCart(){
        debugger;
        const data = {
            userId: userReview.userId,
            productId: userReview.productId,
            quantity: 1
        }
        try{    
            const response = await ServiceLayer.addToCart(productId, data);
            console.log('Status Code', response.status);
            alert(product.productName + ' has been added to your cart.');
        }catch(e){
            console.log('API call unsuccessful', e);
        }
    }

    async function addRating(){
        const data = {
            productId: userReview.productId,
            userId: userReview.userId,
            reviewRating: userReview.reviewRating,
            reviewText: userReview.reviewText,
        }
        try{
            const response = await ServiceLayer.addRating(userId, productId, data);
            console.log(response.data);
        }
        catch(e){
            console.log('API call unsuccessful', e);
        }
    }

    async function addReview(){
        const data = {
            productId: userReview.productId,
            userId: userReview.userId,
            reviewRating: userReview.reviewRating,
            reviewText: userReview.reviewText,
        }
        try{
            const response = await ServiceLayer.addReview(userId, productId, data);
            console.log(response);
        }
        catch(e){
            console.log('API call unsuccessful', e.response.data);
        }
    }

    const onChangeReview = (e) => {
        setUserReview({
            ...userReview, reviewText: e.target.value
        })
    }

    const handleSubmit = () => {
        reviews.forEach(r => {
            if(userReview.userId === r.userId && userReview.productId === r.productId){
                reviews.pop(r);
            }
        })
        addRating();
        addReview();
        setUserReview({
            ...userReview,
            rated: false,
            edited: true
        });
        reviews.push(userReview);
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
                        <li style={{fontSize: '20px'}}><h3 style={{margin: '0'}}>Price: ${product.productPrice}</h3></li>
                        <li>
                        <h4 style={{fontSize: '20px', margin: '0'}}>Rating:</h4>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;

                            return (
                            <div key={i}>
                                {ratingValue <= product.productAverageRating ? 
                                    <span>
                                        <StarIcon
                                        style={{fill:'#F7C631'}}
                                        fontSize='large' 
                                        />
                                    </span>
                                :  
                                    <span>
                                        <StarIcon
                                        style={{fill:'#A5A8AC'}}
                                        fontSize='large' 
                                        />
                                    </span>
                                
                                }

                            </div>
                                );
                                })}
                        </div> 

                        </li>
                        <li><h3 style={{margin: '0', fontSize: '20px'}}>Inventory: {product.quantityOnHand} remaining! </h3></li>
                        <li><Button style={{backgroundColor: '#F96B41'}} className="addToCart__btn" variant='contained' onClick={() => addToCart()} >Add To Cart</Button></li>
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
                    <div style={{display: 'flex'}}>
                        <span>{userName}:</span>
                        <span style={{marginLeft: '10px'}}>{review.reviewText}</span> 
                            
                    <div style={{display: 'flex', marginLeft: '10px'}} >        
                            {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;

                            return (
                            <div key={i}>
                                {ratingValue <= review.reviewRating ? 
                                    <span>
                                        <StarIcon
                                        style={{fill:'#F7C631'}}
                                        fontSize='small' 
                                        />
                                    </span>
                                :  
                                    <span>
                                        <StarIcon
                                        style={{fill:'#A5A8AC'}}
                                        fontSize='small' 
                                        />
                                    </span>
                                
                                }

                            </div>
                                );
                                })}
                      </div>
                      
                      </div>
                    </Typography>
                </div>
            ))

        )
    }

    const starRating = () => {
        
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop:'3px'}}>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                            <div key={i}>
                                <label>
                                    {ratingValue <= (hover || userReview.reviewRating) ?  
                                    <>
                                    <input  type='radio' name='rating' value={ratingValue} onClick={()=>setUserReview({...userReview, reviewRating: ratingValue, rated: true})} />
                                    <StarIcon className='star' 
                                    fontSize='large' 
                                    style={{fill: '#F7C631'}}
                                    onMouseEnter={()=>setHover(ratingValue)} 
                                    onMouseLeave={()=>setHover(null)}
                                    />
                                    </>
                                    :
                                    <>
                                    <input  type='radio' name='rating' value={ratingValue} onClick={()=>setUserReview({...userReview, reviewRating: ratingValue, rated: true})} />
                                    <StarIcon className='star' 
                                    fontSize='large' 
                                    style={{fill: '#A5A8AC'}}
                                    onMouseEnter={()=>setHover(ratingValue)} 
                                    onMouseLeave={()=>setHover(null)}
                                    />
                                    </>
                                    }

                                </label>
                            </div>
                );
                })}
            </div>
        )
    }

    const useStyles = makeStyles((theme) => ({
        layout: {
          width: 'auto',
          marginLeft: theme.spacing(0),
          marginRight: theme.spacing(2),
        },
        paper: {
          marginLeft: theme.spacing(40),
          marginRight: theme.spacing(40),
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(8),
          [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(5)
          },
          [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
          },
          [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(0)
          },
        },
        stepper: {
          padding: theme.spacing(3, 0, 5),
        },
        buttons: {
          display: 'flex',
          justifyContent: 'flex-end',
        },
        addButton: {
          marginLeft: theme.spacing(1),
        },
      }));

      const classes = useStyles();

    return (
        <div >
            <div className={classes.paper} style={{marginBottom: '45px'}}>
            <PageHeader 
            title="Product Detail View"
            subtitle="Detailed View Of Product"
            icon={<VisibilityIcon />}
      />      
            </div>

        <Paper className={classes.paper}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                <Grid container item xs={4} spacing={3} className="grid" direction='column' alignItems="center" justify="center">
                    <div >    
                        <img src="https://i5.walmartimages.com/asr/49edcb9d-ea4b-48bc-b181-5844578528c1_1.e5e95a3e011bab74d0df2d9dae924a86.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="Collectible Item" className="product__img"/>
                        
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
            <div style={{width: '100%', justifyContent: 'start'}}>
                {!userReview.rated && !userReview.edited ? <Button variant='contained' color="primary" onClick={()=>setUserReview({...userReview, rated: true})}>Add A Review</Button> 
                : <></>  }
                {userReview.edited && !userReview.rated ? <Button variant='contained' color="primary" onClick={()=>setUserReview({...userReview, rated: true,})}>Edit Review</Button> 
                : <></> }
                
                {userReview.rated ? 
                <>
                
                <form noValidate onSubmit={() => handleSubmit()} >
                    <span style={{display: 'flex'}}>
                    <Input 
                    multiline
                    name="review"
                    value={userReview.reviewText}
                    onChange={onChangeReview}
                    placeholder=" Add A Review"
                    type="text"
                    id='review'
                    className='review__input'
                    />
                    {starRating()}
                    </span>
                <Button type='submit' style={{marginLeft: '5px'}} variant='contained' color='primary' onClick={() => handleSubmit()}>Submit</Button>
                </form>
                </>
                : <></> }
                
                <h3>Reviews</h3>
                {mapReviews()}
            </div>
        </Grid>
        </Paper>
        </div>
        
    )
}

export default ProductsDetailView


