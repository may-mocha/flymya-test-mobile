import { Platform } from 'react-native'
import styled from 'styled-components'
import { Picker } from '@react-native-picker/picker'
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors,fontSize,fontWeight } from '../../attribute'

export const StyledInputContainer = styled(View)`
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
`
export const StyledInput = styled(TextInput)`
  background-color: ${props => colors[props?.input_bgcolor] || props?.input_bgcolor || colors.light};
  color: ${props => colors.secondary};
  height: 45px;
  padding-left: ${props => (props.iconleftname || props.SVGL) ? 40 : 15}px;
  align-items: flex-start;
  font-size: ${props => {
    let size = fontSize[props?.size] || props.size || fontSize.lg;
    return size
  }}px;
  width: 70%;
  text-align: right;
`
export const StyledRadioCon = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
`
export const StyledRadioOption = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
`

export const StyledRadioCircle = styled(View)`
  background-color: 'transparent';
  border-color: ${colors.secondary};
  width: 15px;
  height: 15px;
  border-radius: 100px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`

export const StyledRB = styled(View)`
  background-color: ${colors.warn};
  width: 8px;
  height: 8px;
  border-radius: 50px;
`
