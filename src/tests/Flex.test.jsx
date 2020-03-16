import React from "react"
import {Flex} from ".."
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import 'jest-styled-components'

test("Component should have Flexbox properties", () => {

    const component = mount(
        <Flex alignItems="center" justifyContent="space-between">
            <div/>
        </Flex>
    )

    expect(mountToJson(component)).toMatchSnapshot()
    expect(component).toHaveStyleRule('display', 'flex')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('justify-content', 'space-between')
})

test("Inline flex switch should be reflected in `display` property", () => {

    const component = mount(
        <Flex inlineFlex={true}>
            <div/>
        </Flex>
    )

    expect(mountToJson(component)).toMatchSnapshot()
    expect(component).toHaveStyleRule('display', 'inline-flex')
})