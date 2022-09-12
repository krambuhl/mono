import type { GetStaticProps } from 'next'

import { listDirectory } from 'ui/lib/directory'
import type { File } from 'ui/types/files'
import { FileListing } from 'ui/components/FileListing'
import { PageHeader } from 'ui/components/PageHeader'
import { Stack } from 'ui/components/Stack'
import { tokens } from 'ui/tokens'
import { Space } from 'ui/components/Space'

interface Props {
  entryList: File[]
}

export default function SketchIndex({ entryList }: Props) {
  return (
    <Stack>
      <PageHeader title="Sketches" />
      <Space pv={tokens.size.x24}>
        <FileListing files={entryList} />
      </Space>
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
