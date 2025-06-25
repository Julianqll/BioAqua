import { ResponsiveLine } from '@nivo/line';
import { Title } from '@mantine/core';

const data = [
  {
    id: 'Río Amazonas',
    data: [
      { x: '2023-01', y: 1 },
      { x: '2023-06', y: 2 },
      { x: '2024-01', y: 3 },
    ],
  },
  {
    id: 'Río Ucayali',
    data: [
      { x: '2023-01', y: 1 },
      { x: '2023-06', y: 1 },
      { x: '2024-01', y: 2 },
    ],
  },
  {
    id: 'Río Tambo',
    data: [
      { x: '2023-01', y: 1 },
      { x: '2023-06', y: 1 },
      { x: '2024-01', y: 1 },
    ],
  },
];

const niveles = ['Bajo', 'Moderado', 'Alto'];

export function LineaTiempoRiesgo() {
  return (
    <div style={{ height: 400 }}>
      <Title order={4} mb="sm">Línea de Tiempo de Riesgo por Río</Title>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'Fecha', legendOffset: 36 }}
        axisLeft={{
          legend: 'Nivel de Riesgo',
          legendOffset: -40,
          tickValues: [1, 2, 3],
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  );
}