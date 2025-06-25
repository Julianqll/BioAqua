// components/JBrowseViewer.tsx
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import { useEffect, useState } from 'react';

interface JBrowseViewerProps {
  sampleId: number;
}

export function JBrowseViewer({ sampleId }: JBrowseViewerProps) {
  const [viewState, setViewState] = useState<any>(null);

  useEffect(() => {
    const state = createViewState({
      assembly: {
        name: 'GRCh38',
        sequence: {
          type: 'ReferenceSequenceTrack',
          trackId: 'refseq',
          adapter: {
            type: 'BgzipFastaAdapter',
            fastaLocation: {
              uri: `/static/data/genome_${sampleId}.fa.gz`,
            },
            faiLocation: {
              uri: `/static/data/genome_${sampleId}.fa.gz.fai`,
            },
            gziLocation: {
              uri: `/static/data/genome_${sampleId}.fa.gz.gzi`,
            },
          },
        },
      },
      tracks: [
        {
          type: 'VariantTrack',
          trackId: `vcf_${sampleId}`,
          name: 'Mutaciones detectadas',
          assemblyNames: ['GRCh38'],
          adapter: {
            type: 'VcfTabixAdapter',
            vcfGzLocation: {
              uri: `/static/data/mutaciones_${sampleId}.vcf.gz`,
            },
            index: {
              location: {
                uri: `/static/data/mutaciones_${sampleId}.vcf.gz.tbi`,
              },
            },
          },
        },
      ],
      location: 'chr1:155000000..155100000',
      defaultSession: {
        name: 'Demo',
        view: {
          id: 'linearView',
          type: 'LinearGenomeView',
        },
      },
    });

    setViewState(state);
  }, [sampleId]);

  if (!viewState) return <p>Cargando visualizador...</p>;

  return <JBrowseLinearGenomeView viewState={viewState} />;
}
