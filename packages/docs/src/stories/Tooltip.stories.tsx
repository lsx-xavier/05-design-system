import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@xavier-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: <button>21</button>,
    text: '21 de Outubro - Indisponível',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
