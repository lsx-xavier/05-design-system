import * as TooltipDefault from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps {
  provider?: TooltipDefault.TooltipProviderProps
  content?: TooltipDefault.TooltipContentProps
  trigger: React.ReactNode
  text: string | React.ReactNode
}

export function Tooltip({ provider, content, text, trigger }: TooltipProps) {
  return (
    <TooltipDefault.Provider delayDuration={200} {...provider}>
      <TooltipDefault.Root>
        <TooltipDefault.Trigger style={{ all: 'unset' }}>
          {trigger}
        </TooltipDefault.Trigger>
        <TooltipDefault.Portal>
          <TooltipContent {...content}>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </TooltipDefault.Portal>
      </TooltipDefault.Root>
    </TooltipDefault.Provider>
  )
}
