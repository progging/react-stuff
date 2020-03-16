import React from 'react'
import Flex from '../Flex'

type ToolbarProps = {
    children: any
}

/***
 * Shorthand for `justify-content: space-between;` and `align-items: center;`
 * @param children
 */
export default function ({children}: ToolbarProps) {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            style={{width: '100%'}}>
            {children}
        </Flex>
    )
}