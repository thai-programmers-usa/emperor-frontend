import React from 'react'
import ProductCard from '../ProductCard'
import productData from '../ProductCard/productData'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import FeaturedCollectionSecond from './FeaturedCollectionSecond'


 const FeaturedCollection = ({classes}) => {


    return (
        <div className={classes.container}>
            <Typography variant="subtitle2" component="p" className={classes.title}>Featured Collection</Typography>
            <div className={classes.cardsContainer}>
                {productData.map((product, index) => 
                    <ProductCard product={product} key={index} />
                )}
            </div>
            <FeaturedCollectionSecond />
        </div>

    )
}

const styles = ({palette, breakpoints}) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        color: palette.secondary.main
    }
})

export default withStyles(styles)(FeaturedCollection);