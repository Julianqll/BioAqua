import { useEffect, useState, useRef } from 'react';
import { Container, Stack, Title, Loader, Center, Text } from '@mantine/core';
import { BlastResultsTable } from '../components/BlastResultsTable/BlastResultsTable';
import { HeatmapGenesPorMuestraCanvas } from '../components/HeatmapGenesPorMuestra/HeatmapGenesPorMuestra';
import { TablaVCF } from '../components/TablaVCF/TablaVCF';
import { JBrowseViewer } from '../components/JBrowseViewer/JBrowseViewer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Fase3Dashboard() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blastData, setBlastData] = useState<any[]>([]);
  const [heatmapData, setHeatmapData] = useState<any[]>([]);
  const [snpData, setSnpData] = useState<any[]>([]);
  const hasFetched = useRef(false); // ← evita llamadas múltiples

  useEffect(() => {
    const fetchFase3Data = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        console.log("⏳ Ejecutando POST a fase3");

        const response = await axios.post(
          `http://127.0.0.1:8000/api/muestras/${id}/fase3/`,
          {},
          {
            headers: { Authorization: `Token ${token}` },
          }
        );

        const data = response.data;
        setBlastData(data.blastData || []);
        setHeatmapData(data.heatmapData || []);
        setSnpData(data.snpData || []);
      } catch (error) {
        console.error('Error al obtener datos de fase 3:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchFase3Data(); // ← solo se ejecuta una vez
    }
  }, [id]);

  if (loading) {
    return (
      <Center h="100vh">
        <Stack align="center">
          <Loader size="xl" />
          <Text>Procesando análisis bioinformático (BLAST, SNPs y Heatmap)...</Text>
        </Stack>
      </Center>
    );
  }

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
