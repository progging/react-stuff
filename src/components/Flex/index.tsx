import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash.kebabcase'

const Flex: any = styled.div`
  display: ${(props: any) => props.inlineFlex ? 'inline-flex' : 'flex'};
  ${(props: any) => props.css.map((prop: any) => `${prop.cssProp}: ${prop.val};`).join(' ')}
`

type GlobalCssProps = 'inherit' | 'initial' | 'unset'

export type FlexboxCssProps = {
    alignItems?: 'strech' | 'center' | 'start' | 'end' | GlobalCssProps
    flexBasis?: any | GlobalCssProps
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | GlobalCssProps
    flexFlow?: any | GlobalCssProps
    flexGrow?: number | GlobalCssProps
    flexShrink?: number | GlobalCssProps
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    inlineFlex?: boolean
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | GlobalCssProps
    order?: number | GlobalCssProps
}

/***
 * Applies Flexbox styling.
 * @param props Flexbox properties should be passed as camelcase props on the component.
 */
export default function (props: FlexboxCssProps & any) {

    const {children, className, style, inlineFlex, ...cssProps} = props

    const css = Object.keys(cssProps).map(prop => ({cssProp: kebabCase(prop), val: cssProps[prop]}))

    return <Flex
        style={style}
        className={className}
        inlineFlex={inlineFlex}
        css={css}>
        {children}
    </Flex>
}