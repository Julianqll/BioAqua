import { useEffect, useState } from 'react';
import {
  Card,
  Title,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { BarChart, ScatterChart } from '@mantine/charts';
import axios from 'axios';

export function FilteredStats() {
  const [lecturasData, setLecturasData] = useState<{ label: string; lecturas: number }[]>([]);
  const [longitudesData, setLongitudesData] = useState<{ rango: string; cantidad: number }[]>([]);
  const [qscoreScatterData, setQscoreScatterData] = useState<
    { name: string; color: string; data: { muestra: number; calidad: number }[] }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idMuestra = 1;
        const token = localStorage.getItem("token");

        const response = await axios.post(
          `http://127.0.0.1:8000/api/muestras/${idMuestra}/analizar/`,
          {},
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        const data = response.data as {
          lecturasData: { label: string; lecturas: number }[];
          longitudesData: { rango: string; cantidad: number }[];
          qscoreScatterData: { name: string; color: string; data: { muestra: number; calidad: number }[] }[];
        };

        setLecturasData(data.lecturasData);
        setLongitudesData(data.longitudesData);
        setQscoreScatterData(data.qscoreScatterData);

      } catch (error) {
        console.error('Error al obtener datos de análisis:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container size="lg" mt="xl">
      <Title order={2} mb="lg">Fase 2 – Filtrado de Secuencias</Title>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Card shadow="sm" padding="lg">
          <Title order={4}>Lecturas Totales vs Filtradas</Title>
          <BarChart
            h={200}
            data={lecturasData}
            dataKey="label"
            series={[{ name: 'lecturas', color: 'blue.6' }]}
          />
        </Card>

        <Card shadow="sm" padding="lg">
          <Title order={4}>Histograma de Longitudes Aceptadas</Title>
          <BarChart
            h={200}
            data={longitudesData}
            dataKey="rango"
            series={[{ name: 'cantidad', color: 'teal.6' }]}
          />
        </Card>
      </SimpleGrid>

      <Card shadow="sm" padding="lg" mt="lg">
        <Title order={4}>Dispersión de Calidad Promedio (Q-score)</Title>
        <ScatterChart
          h={300}
          data={qscoreScatterData}
          dataKey={{ x: 'muestra', y: 'calidad' }}
          xAxisLabel="Muestra"
          yAxisLabel="Calidad Q-score"
        />
      </Card>
    </Container>
  );
}
