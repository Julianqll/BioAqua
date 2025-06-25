// pages/DashboardAdmin.tsx
import { Container, Title, SimpleGrid, Card, Text, Button, Group } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { IconDownload } from '@tabler/icons-react';

const muestrasProcesadas = 125;

const genesFrecuentes = [
  { label: 'mecA', value: 45 },
  { label: 'blaTEM', value: 32 },
  { label: 'uidA', value: 28 },
  { label: '16S', value: 24 },
];

const snpsComunes = [
  { label: 'A345G', value: 22 },
  { label: 'T123C', value: 17 },
  { label: 'G789A', value: 14 },
  { label: 'C456T', value: 10 },
];

export default function DashboardAdmin() {
  const handleExport = (type: 'excel' | 'pdf' | 'json') => {
    // Aquí iría la lógica real de exportación según el formato
    alert(`Exportando resultados como ${type.toUpperCase()}`);
  };

  return (
    <Container size="xl" my="xl">
      <Title order={2} mb="lg">Panel Administrativo – Análisis Ambiental</Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Muestras procesadas</Title>
          <Text size="xl" fw={700}>{muestrasProcesadas}</Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4} mb="sm">Genes más frecuentes</Title>
          <BarChart
            h={200}
            data={genesFrecuentes}
            dataKey="label"
            series={[{ name: 'value', color: 'teal.6' }]}
          />
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4} mb="sm">SNPs más comunes</Title>
          <BarChart
            h={200}
            data={snpsComunes}
            dataKey="label"
            series={[{ name: 'value', color: 'blue.6' }]}
          />
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4} mb="sm">Exportar resultados</Title>
          <Group>
            <Button leftSection={<IconDownload size={16} />} onClick={() => handleExport('excel')}>
              Excel
            </Button>
            <Button leftSection={<IconDownload size={16} />} onClick={() => handleExport('pdf')}>
              PDF
            </Button>
            <Button leftSection={<IconDownload size={16} />} onClick={() => handleExport('json')}>
              JSON
            </Button>
          </Group>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
