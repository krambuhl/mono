import { Image, ImageLockup } from 'components/ImageLockup'

import { Area } from 'ui/components/Area'
import { HeadingText, BodyText } from 'ui/components/Text'
import { Stack } from 'ui/components/Stack'
import { Space } from 'ui/components/Space'
import { ButtonLink } from 'ui/components/Button'
import { tokens } from 'ui/tokens'
import styled from 'styled-components'

const Root = styled.div`
  text-align: center;
`

export default function Index() {
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
            <ImageLockup>
              <Image src="/sequence-1a.png" alt="" />
              <Image src="/sequence-2a.png" alt="" />
              <Image src="/sequence-3a.png" alt="" />
              <Image src="/sequence-4a.png" alt="" />
            </ImageLockup>

            <Stack gap={{ xs: tokens.size.x24, sm: tokens.size.x32 }}>
              <HeadingText as="h1" size="sm">
                oh hi. hello!
              </HeadingText>

              <BodyText as="p" size="sm">
                i’m Evan Krambuhl and i make components with nice people at
                Patreon
              </BodyText>

              <BodyText as="p" size="sm">
                a lifelong waterdog and outdoorser, i have a love for live
                music, drumming, generative art and the absurd
              </BodyText>

              <BodyText as="p" size="sm">
                i specialize in high quality ui and thoughtful tools to make
                developers more productive
              </BodyText>

              <BodyText as="p" size="md">
                &mdash;&mdash;&mdash;
              </BodyText>

              <div>
                <Space height={tokens.size.x4} data-hello="Weod" />
                <ButtonLink href="mailto:hello@kram.land">say hello</ButtonLink>
              </div>

              <BodyText as="p" size="xs">
                * i’m a busy hotdog, <br />
                please be nice
              </BodyText>
            </Stack>
          </Stack>
        </Area>
      </Space>
    </Root>
  )
}
