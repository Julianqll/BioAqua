// components/JBrowseViewer.tsx
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';
import { useEffect, useState } from 'react';

export function JBrowseViewer() {
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
              uri: '/data/genome.fa.gz',
            },
            faiLocation: {
              uri: '/data/genome.fa.gz.fai',
            },
            gziLocation: {
              uri: '/data/genome.fa.gz.gzi',
            },
          },
        },
      },
      tracks: [
        {
          type: 'VariantTrack',
          trackId: 'vcf',
          name: 'Mutaciones detectadas',
          assemblyNames: ['GRCh38'],
          adapter: {
            type: 'VcfTabixAdapter',
            vcfGzLocation: {
              uri: '/data/mutaciones.vcf.gz',
            },
            index: {
              location: {
                uri: '/data/mutaciones.vcf.gz.tbi',
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
  }, []);

  if (!viewState) return <p>Cargando visualizador...</p>;

  return <JBrowseLinearGenomeView viewState={viewState} />;
}
