import { Dimensions, Platform } from 'react-native'
import styled from 'styled-components'
import { Text } from 'react-native'
import { fontSize,fontWeight,colors } from '../../attribute'

export const StyledText = styled(Text)`
  font-size: ${(props) => {
    let size = fontSize[props?.size] || props.size || fontSize.md;
    /* return size */
    return size
    /* return Dimensions.get('window').width < 550 ? size / 1.1 : size */
  }}px;
  font-weight: ${(props) => fontWeight[props?.weight] ||fontWeight.md};
  color: ${(props) => colors[props?.color] || props?.color || colors.secondary};
  text-align: ${(props) => props.textAlign || 'left'};
  ${(props) => props.link && `text-decoration: underline;`};
  ${(props) => props.link && `text-decoration-color: ${props.theme.color.typo[props?.color] || props?.color || props.theme.color.typo.text};`};

`
