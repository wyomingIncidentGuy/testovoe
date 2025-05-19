import { gql } from '@apollo/client';

export const GET_CARS = gql`
  query GetCars {
    cars {
      id
      brand
      model
      model_year
      color
      price
      img_src
      availability
      description
    }
  }
`; 