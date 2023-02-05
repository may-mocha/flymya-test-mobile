import React from 'react'

import { StyledText } from '../../../theme/common/typo'

export const TextCom = ({ children, ...props }) => {

  return (
    <StyledText allowFontScaling={false} {...props} >
      {children}
    </StyledText>
  )
}