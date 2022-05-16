import { Grid } from '../Grid'
import { Text } from '../Text'
import { Link } from '../Link'
import { Stack } from '../Stack'

import { FileListingProps } from './types'
import css from './FileListing.module.css'

export function FileListing({ files }: FileListingProps) {
  return (
    <Grid size={1600} className={css.root}>
      {files &&
        files
          .filter(({ name }) => name !== 'index')
          .map(({ title, date, url }) => (
            <div key={title}>
              <Stack gap="xxs">
                <Text as="h3" type="heading" size="sm" className={css.title}>
                  <Link href={url}>{title}</Link>
                </Text>

                <Text as="div" size="xs">
                  {new Date(date).toLocaleDateString('en-US')}
                </Text>
              </Stack>
            </div>
          ))}

      {!files && <div>No Files</div>}
    </Grid>
  )
}
