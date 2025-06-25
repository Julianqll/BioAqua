import { Table, Title } from '@mantine/core';

export function BlastResultsTable({ data }: { data: any[] }) {
  return (
    <div>
      <Title order={4} mb="sm">Tabla de Resultados BLAST</Title>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Gen</th>
            <th>% Identidad</th>
            <th>E-value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hit, i) => (
            <tr key={i}>
              <td>{hit.gen}</td>
              <td>{hit.identidad}%</td>
              <td>{hit.evalue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
