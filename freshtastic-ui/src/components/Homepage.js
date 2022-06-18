import React from 'react'
import Products from './Products'
import { HomepageContainer, BgImg, BgImgRight } from './styled/Homepage.styles'
import basket from '../res/images/basket.png'
import strawberry from '../res/images/strawberry.png'

export default function Homepage() {
    return (
        <HomepageContainer>
          <Products/>
          <BgImg src = { basket }/>
          <BgImgRight src = { strawberry }/>
        </HomepageContainer>
    )
}
