export const registerQuery  =(firstName, lastName, email, phone, password)=>{
    return `mutation {
        customerCreate(input: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", password: "${password}", phone: "${phone}", acceptsMarketing: true}) {
          customer {
            id
            defaultAddress {
              formattedArea
            }
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }`
}