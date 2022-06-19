import React from 'react'
import { ProductCardWrapper, ProductCardImage, ProductName, PriceTag, ProductDescription } from './styled/ProductCard.styles'
import tomato from '../res/images/tomato.jpg'

export default function ProductCard() {
    return (
        <ProductCardWrapper>
            <ProductCardImage src = { tomato }/>
            <ProductName>Tomatoes</ProductName>
            <ProductDescription>Freshly plucked tomatoes from the garden.</ProductDescription>
            <PriceTag>₹100.23/kg</PriceTag>
        </ProductCardWrapper>
    )
}
