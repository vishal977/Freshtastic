import React from 'react'
import { Container, Card, CardImgContainer, CardContent } from './styled/ProductCard.styles'
import tomato from '../res/images/tomato.jpg'

export default function ProductCard() {
    return (
       
    <>
    <Container>
      <Card>
        <CardImgContainer>
          <img
            href="#"
            src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
          />
        </CardImgContainer>

        <CardContent>
          <h3>This is content</h3>

          <p>
            
          </p>
        </CardContent>
      </Card>
    </Container>
  </>

    )
}
