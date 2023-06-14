export const singleProductQuery =(handle) =>{

 return   `query products{
        productByHandle(handle:"${handle}"){
      title
      id
      metafield(namespace:"booking" key:"time"){
        value
      }
      variants(first:20){
        edges{
          node{
            id
            price{
              currencyCode
              amount
            }
          }
        }
      }
      descriptionHtml
      priceRange{
        minVariantPrice{
            amount
            currencyCode
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
        maxVariantPrice{
    amount
    currencyCode
}
}
        images(first:1) {
        edges {
          node {
            transformedSrc
            altText
          }
        }
      }

}

    }
  }

}`
