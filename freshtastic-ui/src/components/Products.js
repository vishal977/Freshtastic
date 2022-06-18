import React from "react";
import { ProductsContainer, SidebarContainer } from "./styled/Products.styles";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <ProductsContainer>
         <ProductCard/> <ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/>
      </ProductsContainer>
    </>
  );
}
