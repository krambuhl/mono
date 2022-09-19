import { RecoilRoot, atom, selector } from 'recoil'
import styled from 'styled-components'
import { Divider } from 'ui/components/Divider'
import { Stack } from 'ui/components/Stack'
import { BodyText, DataText, HeadingText } from 'ui/components/Text'
import { tokens } from 'ui/tokens'

export const countState = atom<number>({
  key: 'count',
  default: 0,
})

export default function RecoilAdventure() {
  return (
    <RecoilRoot>
      <Stack gap={tokens.size.x48}>
        <Stack gap={tokens.size.x16} alignment="flex-start">
          <HeadingText as="h2" size="xl">
            Heading Text
          </HeadingText>
          <HeadingText as="h3" size="xl">
            Sunt eiusmod adipisicing nulla reprehenderit id proident. Ex elit
            eiusmod consequat duis ullamco.
          </HeadingText>
          <HeadingText as="h3" size="lg">
            Aliqua qui ipsum aliquip magna officia deserunt consequat nisi
            pariatur ea dolor cupidatat. Quis minim ea eiusmod ipsum cupidatat
            in ad incididunt dolore.
          </HeadingText>
          <HeadingText as="h3" size="md">
            Veniam Lorem do cillum ea velit irure commodo anim laborum sunt.
            Nulla proident nisi magna ad labore irure. Non laborum aliquip nisi
            est Lorem. Fugiat veniam et qui voluptate id cupidatat nostrud.
          </HeadingText>
          <HeadingText as="h3" size="sm">
            Velit qui est sit officia est anim. Consequat reprehenderit dolore
            culpa deserunt nostrud aliqua velit consequat pariatur ipsum.
            Aliquip enim nisi laborum cillum dolore culpa ea proident anim.
          </HeadingText>
          <HeadingText as="h3" size="xs">
            Pariatur cupidatat irure fugiat ad. Sit culpa Lorem tempor aute et
            ad in. Ullamco eiusmod consectetur dolor proident occaecat sint.
            Nulla cupidatat culpa dolore eu do excepteur cillum est mollit
            consectetur ut.
          </HeadingText>
        </Stack>
        <Divider />
        <Stack gap={tokens.size.x16} alignment="flex-start">
          <HeadingText as="h2" size="xl">
            Body Text
          </HeadingText>
          <BodyText size="xl">
            Nisi consectetur voluptate amet deserunt labore laboris cillum
            reprehenderit et. Ullamco eiusmod ipsum laborum pariatur incididunt
            pariatur.
          </BodyText>
          <BodyText size="lg">
            Incididunt id commodo labore cupidatat. Magna labore reprehenderit
            ut ex adipisicing incididunt qui nisi reprehenderit labore aliqua
            labore sunt. Pariatur cillum officia amet tempor commodo id.
          </BodyText>
          <BodyText size="md">
            Sit tempor nulla non proident proident aliquip. Amet eiusmod mollit
            Lorem velit tempor cupidatat. Adipisicing irure non minim eu minim
            do voluptate ullamco dolore. Laboris elit duis cillum fugiat ad et
            deserunt quis ea tempor. Nisi voluptate et cillum amet nulla laborum
            incididunt dolor Lorem.
          </BodyText>
          <BodyText size="sm">
            Magna consequat ex duis anim cupidatat ullamco Lorem. Adipisicing
            ipsum ea voluptate pariatur officia id ullamco fugiat ad consectetur
            dolore. Cillum et minim ex id proident commodo anim ut duis laboris
            proident. Aliqua nostrud nostrud anim fugiat dolore ut reprehenderit
            voluptate do excepteur cillum. Do velit irure excepteur culpa tempor
            deserunt consectetur.
          </BodyText>
          <BodyText size="xs">
            Eiusmod commodo sint cupidatat quis commodo elit anim amet
            adipisicing sunt ut sint. Incididunt do non veniam ipsum aute eu
            aliqua exercitation quis minim non. Magna eu et cupidatat non
            nostrud consectetur culpa enim eiusmod irure cillum. Exercitation
            consequat laboris aliqua pariatur. Qui quis nostrud veniam enim
            proident. Veniam ad id velit exercitation amet. Veniam sunt aute
            occaecat duis consequat commodo duis.
          </BodyText>
        </Stack>
        <Divider />
        <Stack gap={tokens.size.x16} alignment="flex-start">
          <HeadingText as="h2" size="xl">
            Data Text
          </HeadingText>
          <DataText size="xl">
            Quis ipsum velit ipsum ea deserunt minim duis pariatur sint ad.
            Pariatur elit consectetur quis anim eiusmod ex esse ex qui minim
            aliquip.
          </DataText>
          <DataText size="lg">
            In qui dolore consequat officia nulla non minim nulla dolore dolor
            veniam est tempor sunt. Velit proident sint laboris mollit dolor
            laboris nulla excepteur excepteur esse. Ea labore sint excepteur
            culpa et dolore irure magna anim. Consectetur nisi incididunt eu
            culpa magna Lorem aliqua reprehenderit.
          </DataText>
          <DataText size="md">
            Velit aliqua id deserunt do culpa ipsum eiusmod ex dolor id. Nulla
            incididunt exercitation tempor occaecat. Officia culpa magna labore
            officia exercitation nostrud pariatur dolor qui esse ullamco
            adipisicing tempor tempor. Proident esse id sit esse laborum.
          </DataText>
          <DataText size="sm">
            Occaecat ea dolore reprehenderit ea nostrud sunt ea non sunt dolor
            do do aliqua adipisicing. Dolore aliquip magna nostrud sint amet
            ipsum veniam ipsum. In aliquip occaecat ad ut irure nulla voluptate
            laboris. In est officia labore nisi ullamco. Non in amet elit quis
            ad cupidatat reprehenderit.
          </DataText>
          <DataText size="xs">
            Proident aliquip esse do non quis aliquip minim. Ullamco voluptate
            eiusmod cupidatat eu nulla amet minim exercitation fugiat aute.
            Consequat labore adipisicing officia cupidatat tempor. Eu fugiat qui
            et consectetur reprehenderit proident duis cillum excepteur magna
            occaecat voluptate culpa proident.
          </DataText>
        </Stack>
      </Stack>
    </RecoilRoot>
  )
}
