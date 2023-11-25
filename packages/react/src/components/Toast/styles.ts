import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '0',
  listStyle: 'none',
  zIndex: '2147483647',
  outline: 'none',
  padding: '0',
})

export const Item = styled(Toast.Root, {
  display: 'flex',
  width: '22.5rem',
  padding: '0.75rem 1.25rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.25rem',
  borderRadius: '0.375rem',
  border: '1px solid $gray600',
  background: '$gray800',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '$1',
})

export const CloseButton = styled(Toast.Close, {
  all: 'unset',
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    opacity: '0.8',
  },
})
