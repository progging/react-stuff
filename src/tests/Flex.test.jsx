import React from "react"
import {Flex} from "../.."
import {create} from 'react-test-renderer'
import 'jest-styled-components'

test("Component should have flexbox properties", () => {

    const tree = create(
        <Flex alignItems="center" justifyContent="space-between">
            <div/>
        </Flex>
    ).toJSON()

    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('justify-content', 'space-between')
})

test("Inline flex switch should be reflected in `display` property", () => {

    const tree = create(
        <Flex inlineFlex={true}>
            <div/>
        </Flex>
    ).toJSON()

    expect(tree).toHaveStyleRule('display', 'inline-flex')
})