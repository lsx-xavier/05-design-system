import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'
import {
  Controls,
  Description,
  Stories,
  Subtitle,
  Title,
  Primary as PrimaryTemplate,
} from '@storybook/blocks'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryTemplate />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
