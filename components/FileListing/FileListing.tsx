import { Grid } from 'components/Grid'
import { Text } from 'components/Text'
import { Link } from 'components/Link'
import { Stack } from 'components/Stack'

import { FileListingProps } from './types'
import css from './FileListing.module.css'

export function FileListing({ files }: FileListingProps) {
  return (
    <Grid size={1600} className={css.root}>
      {files
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
    </Grid>
  )
}
