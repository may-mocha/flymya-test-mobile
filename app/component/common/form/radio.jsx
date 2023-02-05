import React from 'react'
import { StyledRadioCon, StyledRadioCircle, StyledRB, StyledRadioOption } from '../../../theme'
import { TextCom } from '../typo'
import { colors } from '../../../theme'
import { View } from 'react-native'

export const RadioCom = ({option,...props}) => {
const [val, setVal] = React.useState(props.val)
return(
  <StyledRadioCon style={props.style} {...props}>
    {
      option &&
      option?.map((option,key)=>(
        <StyledRadioOption key={key} style={{flexDirection: 'row', alignItems: 'center'}} onPress={_=>setVal(option)}>
          <StyledRadioCircle style={{borderColor: `${val===option? colors?.primary : colors.secondary}`}}>
            <StyledRB value={option} style={{backgroundColor: `${val===option? colors.primary : colors.light}`}} />
          </StyledRadioCircle>
          <TextCom style={{marginRight: 10}}>{option}</TextCom>
        </StyledRadioOption>
      ))
    }
  </StyledRadioCon>
)
}
