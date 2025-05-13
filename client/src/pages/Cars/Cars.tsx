import { FC } from "react";
import { useQuery, gql } from '@apollo/client';
import { Query } from "../../graphql/generated";
import CarCard from "../../components/CarCard/CarCard";

const GET_CARS = gql`
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

const Cars: FC = () => {
  const { loading, error, data } = useQuery<Query>(GET_CARS);

  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1920px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 445px)',
      gap: '24px',
      justifyContent: 'center',
    },
    loading: {
      textAlign: 'center' as const,
      padding: '40px',
      fontSize: '18px',
    },
    error: {
      color: 'red',
      textAlign: 'center' as const,
      padding: '40px',
    },
  };

  if (loading) {
    return <div style={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div style={styles.error}>Ошибка: {error.message}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {data?.cars.map((car: Query['cars'][0]) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
