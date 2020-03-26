import React from 'react'

type RenderProps = {
    children: any
    if: any
}

/***
 * Conditionally renders children if `condition` is truthy.
 * @param props
 */
export const Render = (props: RenderProps) => props.if && props.children