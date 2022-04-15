import Link from 'next/link'
import type { File } from 'types/files'
import type { CoreComponent } from 'types/core'

import { Grid } from 'components/Grid'

import css from './FileListing.module.css'

interface Props extends Omit<CoreComponent, 'children'> {
  files: File[]
}

export default function FileListing({ files }: Props) {
  return (
    <Grid size={1600} className={css.root}>
      {files
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
