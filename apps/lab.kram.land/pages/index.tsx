import { Area } from 'ui/components/Area'
import { HeadingText, BodyText } from 'ui/components/Text'
import { Stack } from 'ui/components/Stack'
import { Space } from 'ui/components/Space'
import { ButtonLink } from 'ui/components/Button'
import { tokens } from 'ui/tokens'
import styled from 'styled-components'
import { useDataContext } from 'ui/components/DataContext'

const Root = styled.div`
  text-align: center;
`

export default function Index() {
  const {
    constants: { SITE_NAME },
  } = useDataContext()
  return (
    <Root>
      <Space
        pv={{
          xs: tokens.size.x32,
          sm: tokens.size.x56,
          md: tokens.size.x72,
        }}
        ph={tokens.size.x24}
      >
        <Area width={tokens.width.x384}>
          <Stack
            gap={{
              xs: tokens.size.x32,
              sm: tokens.size.x48,
              md: tokens.size.x56,
            }}
          >
            <Stack gap={{ xs: tokens.size.x24, sm: tokens.size.x32 }}>
              <HeadingText as="h1" size="sm">
                {SITE_NAME}
              </HeadingText>
            </Stack>
          </Stack>
        </Area>
      </Space>
    </Root>
  )
}
