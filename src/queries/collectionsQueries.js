export const collectionQueryForGrid = `query($collectionId:ID!){
    collection(id:$collectionId){
      title
      handle
      image{
        url
      }
    }
  }
  `
