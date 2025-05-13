import { gql } from '@apollo/client';

export const GET_CARS = gql`
  query GetCars {
    cars {
      id
      brand
      model
      color
      price
      img_src
      description
      availability
      model_year
    }
  }
`; 