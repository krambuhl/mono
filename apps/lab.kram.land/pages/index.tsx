import { Area } from 'ui/components/Area'
import { HeadingText } from 'ui/components/Text'
import { Stack } from 'ui/components/Stack'
import { tokens } from 'ui/tokens'
import styled from 'styled-components'

const Root = styled.div`
  text-align: center;
`

export default function Index() {
  return (
    <Root>
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
              This is the lab!
            </HeadingText>
          </Stack>
        </Stack>
      </Area>
    </Root>
  )
}
