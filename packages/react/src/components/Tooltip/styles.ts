import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '0.3125rem',
  color: '$gray100',
  fontSize: '$sm',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  borderColor: '$gray900',
})
