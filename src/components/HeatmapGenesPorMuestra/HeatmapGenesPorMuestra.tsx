import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { Title, Text, Center } from '@mantine/core';

interface HeatmapProps {
  data: {
    id: string;
    data: { x: string; y: number }[];
  }[];
}

export function HeatmapGenesPorMuestraCanvas({ data }: HeatmapProps) {
  const sanitizeValue = (val: any) => {
    const num = Number(val);
    return Number.isFinite(num) ? num : 0;
  };

  const cleanedData = Array.isArray(data)
    ? data.map((row) => ({
        id: row.id,
        data: Array.isArray(row.data)
          ? row.data
              .filter((d) => typeof d?.x === 'string')
              .map((d) => ({
                x: d.x,
                y: sanitizeValue(d.y),
              }))
          : [],
      }))
    : [];

  // Si no hay datos o todo está vacío
  const isEmpty = cleanedData.length === 0 || cleanedData.every(row => row.data.length === 0);

  if (isEmpty) {
    return (
      <Center h={300}>
        <Text color="dimmed" size="sm">No hay datos disponibles para el heatmap.</Text>
      </Center>
    );
  }

  return (
    <div style={{ height: 500 }}>
      <Title order={4} mb="sm">Heatmap de Genes por Muestra</Title>
      <ResponsiveHeatMapCanvas
        data={cleanedData}
        valueFormat=">-.2s"
        margin={{ top: 100, right: 60, bottom: 40, left: 100 }}
        axisTop={{ tickRotation: -90 }}
        axisRight={{ legend: 'Muestra', legendOffset: 40 }}
        axisLeft={{ legend: 'Gen', legendOffset: -60 }}
        colors={{
          type: 'quantize',
          scheme: 'red_yellow_blue',
          steps: 10,
        }}
        emptyColor="#eeeeee"
        borderWidth={1}
        borderColor="#000000"
        enableLabels={false}
        legends={[
          {
            anchor: 'left',
            translateX: -60,
            translateY: 0,
            length: 200,
            thickness: 10,
            direction: 'column',
            tickPosition: 'after',
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: '>-.2s',
            title: 'Valor →',
            titleAlign: 'start',
            titleOffset: 4,
          },
        ]}
      />
    </div>
  );
}
