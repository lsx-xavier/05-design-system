import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@xavier-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast.Item,

  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      return (
        <Toast.Provider>
          <div>
            <Button onClick={() => setOpen((state) => !state)}>
              Open Toast
            </Button>
            {Story({
              args: {
                open,
                onOpenChange: setOpen,
                title: 'Title',
                description: 'Description',
              },
            })}
          </div>
        </Toast.Provider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
