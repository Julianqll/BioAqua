import { Container, Stack, Title } from '@mantine/core';
import { BlastResultsTable } from '../components/BlastResultsTable/BlastResultsTable';
import { HeatmapGenesPorMuestraCanvas } from '../components/HeatmapGenesPorMuestra/HeatmapGenesPorMuestra';
import { TablaVCF } from '../components/TablaVCF/TablaVCF';
import { JBrowseViewer } from '../components/JBrowseViewer/JBrowseViewer';


export default function Fase3Dashboard() {
  const blastData = [
    { gen: 'mecA', identidad: 98.6, evalue: '1e-5' },
    { gen: 'blaZ', identidad: 87.2, evalue: '3e-10' },
  ];

    const heatmapData = [
    {
        id: 'AD',
        data: [
        { x: 'John', y: 3897 },
        { x: 'Raoul', y: -70326 },
        { x: 'Jane', y: -52536 },
        // ...
        ],
    },
    {
        id: 'BRCA1',
        data: [
        { x: 'John', y: 12000 },
        { x: 'Raoul', y: -20000 },
        { x: 'Jane', y: 30000 },
        // ...
        ],
    },
    ];


  const snpData = [
    { chrom: 'chr1', pos: 123456, ref: 'A', alt: 'G', impact: 'Moderado' },
    { chrom: 'chr2', pos: 234567, ref: 'T', alt: 'C', impact: 'Alto' },
  ];

  return (
    <Container size="xl" my="xl">
      <Title order={2} mb="xl">Fase 3 – Análisis Bioinformático</Title>
      <Stack gap="xl">
        <BlastResultsTable data={blastData} />
        <HeatmapGenesPorMuestraCanvas data={heatmapData} />
        <TablaVCF snps={snpData} />
        <JBrowseViewer />
      </Stack>
    </Container>
  );
}