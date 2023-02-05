import React from 'react'
import { Platform } from 'react-native'
import { Scroll, KeyboardView } from './style'

export const PlainLayout = props => {
  return (
    <KeyboardView background={props.background} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        {
          props.children
        }
      </Scroll>
    </KeyboardView>
  )
}
