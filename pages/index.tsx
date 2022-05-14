import type { GetStaticProps } from 'next'
import type { File } from 'types/files'

import { listDirectory } from 'lib/directory'
import { FileListing } from 'components/FileListing'
import { Text } from 'components/Text'
import { Stack } from 'components/Stack'

interface Props {
  entryList: File[]
}

export default function SketchIndex({ entryList }: Props) {
  return (
    <Stack>
      <Text as="h1" type="heading" size="lg">
        Sketches
      </Text>

      <FileListing files={entryList} />
    </Stack>
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
