import { Table, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface Muestra {
  id: number;
  ubicacion: string;
  fecha_recoleccion: string;
  rio_fuente: string;
  comunidad: string;
  fecha_creacion: string;
}

interface MuestrasTableProps {
  data: Muestra[];
  rutaBase: string; // Ej: '/dashboard/muestras' o '/analisis'
}

export function MuestrasTable({ data, rutaBase }: MuestrasTableProps) {
  const navigate = useNavigate();

  const rows = data.map((muestra) => (
    <Table.Tr key={muestra.id}>
      <Table.Td>{muestra.ubicacion}</Table.Td>
      <Table.Td>{muestra.fecha_recoleccion}</Table.Td>
      <Table.Td>{muestra.rio_fuente}</Table.Td>
      <Table.Td>{muestra.comunidad}</Table.Td>
      <Table.Td>{new Date(muestra.fecha_creacion).toLocaleDateString()}</Table.Td>
      <Table.Td>
        <Button
          variant="light"
          size="xs"
          onClick={() => navigate(`${rutaBase}/${muestra.id}`)}
        >
          Ver detalles
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Ubicación</Table.Th>
          <Table.Th>Fecha de recolección</Table.Th>
          <Table.Th>Río o fuente</Table.Th>
          <Table.Th>Comunidad</Table.Th>
          <Table.Th>Fecha creación</Table.Th>
          <Table.Th>Acciones</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
