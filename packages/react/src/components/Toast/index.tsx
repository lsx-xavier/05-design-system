import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { CloseButton, Item, TitleContainer, Viewport } from './styles'
import React from 'react'
import { Text } from '../Text'

export interface ToastProps extends RadixToast.ToastProps {
  title?: string
  description?: string
}

function ToastIem({ title, description, ...propsToast }: ToastProps) {
  return (
    <Item {...propsToast}>
      <TitleContainer>
        <RadixToast.Title className="flex-1">
          <Text as="h2" size="lg">
            {title}
          </Text>
        </RadixToast.Title>
        <CloseButton>
          <X />
        </CloseButton>
      </TitleContainer>
      <RadixToast.Description asChild>
        <Text>{description}</Text>
      </RadixToast.Description>
    </Item>
  )
}

function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <RadixToast.Provider>
      {children}
      <Viewport />
    </RadixToast.Provider>
  )
}

export const Toast = {
  Provider: ToastProvider,
  Item: ToastIem,
}
