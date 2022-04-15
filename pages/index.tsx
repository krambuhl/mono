import Link from 'next/link'
import type { GetStaticProps } from 'next'
import type { File } from 'types/files'

import { Grid } from 'components/Grid'
import { listDirectory } from 'lib/directory'

interface Props {
  entryList: File[]
}

export default function SketchIndex({ entryList }: Props) {
  return (
    <Grid size={1600}>
      {entryList
        .filter(({ name }) => name !== 'index')
        .map(({ title, date, url }) => (
          <div key={title}>
            <Link href={url}>
              <a>
                <div>
                  <strong>{title}</strong>
                </div>

                <div style={{ marginTop: 4 }}>
                  {new Date(date).toLocaleDateString('en-US')}
                </div>
              </a>
            </Link>
          </div>
        ))}
    </Grid>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entryList = await listDirectory('pages/sketch/**/*.tsx')

  return {
    props: {
      entryList,
    },
  }
}
