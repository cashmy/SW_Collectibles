import React from 'react';
import "./ProductDetailView.css";
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';


function ProductsDetailView() {
    return (
        <div>
        <Grid container direction="row" spacing={5} style={{marginTop: "2rem"}}></Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                <Grid container item xs={4} spacing={3} className="grid">
                    <div>
                    <img src="https://www.nin9s.net/wp-content/uploads/2019/12/Loot-Crate-DX-Light-Saber-February-2018-0007-733x733-1.jpg" alt="Collectible Item" className="product__img"/>
                    </div>
                
                </Grid>
                <Grid container item xs={4} spacing={3} justify="center" alignItems="center" className="grid" id="midProductDetailGrid">
                    <div >
                        <h1 className="product__title">Product Title</h1> 
                        <p className="product__description">Product Description</p>
                    </div>
                </Grid>
                <Grid container item xs={4} spacing={3} zeroMinWidth  justify="center" alignItems="center" className="grid">
                    <Typography noWrap>
                    <div>
                        <h2>Priced: 1093.99$</h2>
                        <h2>Rating: 75 out of 100</h2>
                        <h3>Inventory: 18474748234932pxZYm3</h3>
                        <button> Add to Cart </button>
                        
                    </div>
                    </Typography>
                </Grid>
            </Grid>
        <Grid container direction="row" spacing={5} style={{marginBottom: "2rem"}} id="Reviews">

            <div> Review </div>
        </Grid>
        </div>
    )
}

export default ProductsDetailView
