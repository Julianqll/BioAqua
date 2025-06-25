// components/HeatmapGenesPorMuestraCanvas.tsx
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { Title } from '@mantine/core';

interface HeatmapProps {
  data: {
    id: string;
    data: { x: string; y: number }[];
  }[];
}

export function HeatmapGenesPorMuestraCanvas({ data }: HeatmapProps) {
  return (
    <div style={{ height: 500 }}>
      <Title order={4} mb="sm">Heatmap de Genes por Muestra</Title>
      <ResponsiveHeatMapCanvas
        data={data}
        valueFormat=">-.2s"
        margin={{ top: 100, right: 60, bottom: 40, left: 100 }}
        axisTop={{
          tickRotation: -90,
        }}
        axisRight={{
          legend: 'Muestra',
          legendOffset: 40,
        }}
        axisLeft={{
          legend: 'Gen',
          legendOffset: -60,
        }}
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
