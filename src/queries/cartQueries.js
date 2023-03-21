export const createCartQuery = (productId, quantity) => {
  return `mutation{
      cartCreate(input:{
        lines:[
          {
            merchandiseId:"${productId}"
            quantity:${quantity}
          }

        ]
      }){
        cart{
          id
        }
      }
    }`
}


export const getCartQuery = (cartId) => {
  return `{
    cart(id: "${cartId}") {
      id
      checkoutUrl
      totalQuantity
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            quantity
            merchandise {
              ... on ProductVariant {
                product {
                  title
                  description
                  images(first: 20) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `
}

export const addItemToCartQuery = (cartId, productId, quantity)=>{
  return `mutation {
    cartLinesAdd(cartId: "${cartId}", lines: [{merchandiseId: "${productId}", quantity: ${quantity}}]) {
      cart {
        id
      }
    }
  }
  `
}


