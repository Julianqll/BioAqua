import { Container, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MuestrasTable } from '../components/MuestrasTable/MuestrasTable';

export default function FilteredTable() {
  const [muestras, setMuestras] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve token from localStorage or another secure place
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/muestras/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      setMuestras(res.data as any[]);
    });
  }, []);

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="md">Seleccione para ver el filtrado de la muestra</Title>
      <MuestrasTable data={muestras} rutaBase="/dashboard/filtered"/>
    </Container>
  );
}
