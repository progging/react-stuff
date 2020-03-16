import React from "react"
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import 'jest-styled-components'
import {ThemeProvider} from 'styled-components'
import {Spacing} from ".."
import {spacingCss} from '../components/helpers'

test("Component should have padding around it", () => {

    const component = mount(
        <Spacing padding={[1]}>
            <div/>
        </Spacing>
    )

    expect(mountToJson(component)).toMatchSnapshot()
    expect(component).toHaveStyleRule('padding', expect.any(String))
})

test("Component should adapt its spacing based on the theme", () => {

    const component = mount(
        <ThemeProvider theme={{baseUnitPx: 16}}>
            <Spacing padding={[1]}>
                <div/>
            </Spacing>
        </ThemeProvider>
    )

    expect(component).toHaveStyleRule('padding', '16px')
})

test("Spacing function must fail if spacing array does not have 1, 2, or 4 elements", () => {
    expect(() => {
        spacingCss('padding', 8, [])
    }).toThrowError(new Error('Array must contain either 1, 2, or 4 elements'))
    expect(() => {
        spacingCss('padding', 8, [1, 1, 1])
    }).toThrowError(new Error('Array must contain either 1, 2, or 4 elements'))
})