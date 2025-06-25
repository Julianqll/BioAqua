import { Table, Title } from '@mantine/core';

export function TablaVCF({ snps }: { snps: any[] }) {
  return (
    <div>
      <Title order={4} mb="sm">Mutaciones (VCF)</Title>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Chr</th>
            <th>Posición</th>
            <th>Ref</th>
            <th>Alt</th>
            <th>Impacto</th>
          </tr>
        </thead>
        <tbody>
          {snps.map((snp, i) => (
            <tr key={i}>
              <td>{snp.chrom}</td>
              <td>{snp.pos}</td>
              <td>{snp.ref}</td>
              <td>{snp.alt}</td>
              <td>{snp.impact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}