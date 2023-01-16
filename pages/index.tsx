import Head from 'next/head'
import Mode from '../components/Mode'
import { Flex, Button, Input, MultiSelect } from '@mantine/core'
import { IconAt } from '@tabler/icons'

export default function Home() {
  const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' }
  ]

  return (
    <>
      <Head>
        <title>Mantine</title>
        <meta name="description" content="Mantine App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        mih="100vh"
        miw="100vw"
        justify="center"
        align="center"
        direction="column"
        gap={10}
        wrap="wrap">
        MANTINE
        <div>{<Mode />}</div>
        <div>
          <Button>Settings</Button>
        </div>
        <div>
          <Input icon={<IconAt />} placeholder="Your email" />
        </div>
        <div>
          <MultiSelect
            data={data}
            label="Your favorite frameworks/libraries"
            placeholder="Pick all that you like"
          />
        </div>
      </Flex>
    </>
  )
}
