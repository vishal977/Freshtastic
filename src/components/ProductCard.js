import React from 'react'
import { ProductCardWrapper, ProductCardImage } from './styled/ProductCard.styles'
import tomato from '../res/images/tomato.jpg'

export default function ProductCard() {
    return (
        <ProductCardWrapper>
            <ProductCardImage src = { tomato }/>
        </ProductCardWrapper>
    )
}
