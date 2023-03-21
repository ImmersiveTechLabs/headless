export const singleProductQuery =(handle) =>{

 return   `query products{
        productByHandle(handle:"${handle}"){
      title
      id
      variants(first:1){
        edges{
          node{
            id
          }
        }
      }
      description
      priceRange{
        minVariantPrice{
            amount
        }
      }
      images(first:1){
          edges{
          node{
              transformedSrc
          }
        }
      }

    }
  }`
}
export const allProductsQuery = `query products {
    products(first:20){
        edges{
        node{
            title
            handle
      priceRange {
        minVariantPrice{
    amount
}
}
        images(first:1) {
        edges {
          node {
            transformedSrc
          }
        }
      }

}

    }
  }

}`
