import React from 'react'
import styled from 'styled-components'
import {spacingCss} from '../helpers'

export type SpacingProps = {
    children: any
    padding?: number[]
    margin?: number[]
    theme?: any
}

const StyledSpacing = styled.div`
  ${(props: SpacingProps) => spacingCss('padding', props.theme ? props.theme.baseUnitPx : 8, props.padding)}
  ${(props: SpacingProps) => spacingCss('margin', props.theme ? props.theme.baseUnitPx : 8, props.margin)}
`

/***
 * Applies padding/margin in the magnitude of units (see docs on how to override what one unit is).
 * @param children
 * @param padding
 * @param margin
 */
export const Spacing = ({children, padding, margin}: any) => {
    return (
        <StyledSpacing
            padding={padding}
            margin={margin}>
            {children}
        </StyledSpacing>
    )
}