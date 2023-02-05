import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { TextCom } from '../typo'
import { StyledInput, StyledInputContainer } from '../../../theme'

export const InputCom = ({label,style,...props}) => {
    return(
        <StyledInputContainer style={style}>
            {
                label &&
                <TextCom color='gray2'>{label}</TextCom>
            }
            <StyledInput {...props}></StyledInput>
        </StyledInputContainer>
    )
}