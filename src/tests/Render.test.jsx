import React from "react"
import {Render} from ".."
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'

test("Children should not be rendered on falsy condition", () => {

    const component = mount(
        <Render if={false}>
            <div/>
        </Render>
    )

    const componentJson = mountToJson(component)
    expect(componentJson).toMatchSnapshot()
    expect(componentJson.children).toBe(null)
})

test("Children should be rendered on truthy condition", () => {

    const component = mount(
        <Render if={true}>
            <div/>
        </Render>
    )

    const componentJson = mountToJson(component)
    expect(componentJson).toMatchSnapshot()
    expect(componentJson.children).not.toBe(null)
})