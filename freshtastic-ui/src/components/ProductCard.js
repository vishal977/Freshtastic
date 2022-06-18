import React from 'react'
import { ProductCardWrapper, ProductCardImage, ProductName, PriceTag } from './styled/ProductCard.styles'
import tomato from '../res/images/tomato.jpg'
import paperclip from '../res/images/paperclip.png'

export default function ProductCard() {
    return (
        <ProductCardWrapper>
            <ProductCardImage src = { tomato }/>
            <ProductName>Tomatoes</ProductName>
            <PriceTag>₹100.23/kg</PriceTag>
        </ProductCardWrapper>
    )
}
