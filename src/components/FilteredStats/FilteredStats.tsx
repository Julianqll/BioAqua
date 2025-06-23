import {
  Card,
  Title,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { BarChart, ScatterChart } from '@mantine/charts';

export function FilteredStats() {
  const lecturasData = [
    { label: 'Total', lecturas: 150000 },
    { label: 'Filtradas', lecturas: 124000 },
  ];

  const longitudesData = [
    { rango: '50-100', cantidad: 2000 },
    { rango: '101-150', cantidad: 45000 },
    { rango: '151-200', cantidad: 50000 },
    { rango: '201-250', cantidad: 22000 },
    { rango: '251-300', cantidad: 5000 },
  ];

  const qscoreScatterData = [
    {
      name: 'Grupo A',
      color: 'blue.5',
      data: [
        { muestra: 1, calidad: 18 },
        { muestra: 2, calidad: 22 },
        { muestra: 3, calidad: 30 },
        { muestra: 4, calidad: 35 },
        { muestra: 5, calidad: 40 },
        { muestra: 6, calidad: 25 },
        { muestra: 7, calidad: 37 },
      ],
    },
    {
      name: 'Grupo B',
      color: 'green.5',
      data: [
        { muestra: 1, calidad: 20 },
        { muestra: 2, calidad: 28 },
        { muestra: 3, calidad: 32 },
        { muestra: 4, calidad: 38 },
        { muestra: 5, calidad: 42 },
        { muestra: 6, calidad: 26 },
        { muestra: 7, calidad: 34 },
      ],
    },
  ];

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
