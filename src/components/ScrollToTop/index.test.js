import React from 'react'
import {ScrollToTop} from './index'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ScrollToTop', () => {
    
    describe('componentDidUpdate', () => {
    
        afterEach(() => {
            global.scrollTo.mockReset()
        })

        it('should scroll the window when the url changes', () => {
            // Arrange
            const props = {
                location: {
                    path: '/test'
                }
            }

            global.scrollTo = jest.fn()

            const wrapper = mount(
				<ScrollToTop {...props}>
                    <h1>test</h1>
                </ScrollToTop>
            )

            // Act
            wrapper.setProps(props)
            
            // Assert
            expect(global.scrollTo).toHaveBeenCalledWith(0,0)
        })

        it('should not scroll the window when the url hasn\'t changed', () => {
            // Arrange
            const props = {
                location: {
                    path: '/test'
                }
            }

            global.scrollTo = jest.fn()

            const wrapper = mount(
				<ScrollToTop {...props}>
                    <h1>test</h1>
                </ScrollToTop>
            )

            // Act
            wrapper.setProps(props)
            
            // Assert
            expect(global.scrollTo).toHaveBeenCalledTimes(1)
        })

        it('should not scroll if path ignored', () => {
            // Arrange 
            const props = {
                location: {
                    pathname: '/route'
                },
                ignoredPaths: ['/route']
            }

            global.scrollTo = jest.fn()

            const wrapper = mount(
                <ScrollToTop {...props}>
                    <h1>test</h1>
                </ScrollToTop>
            )

            // Act
            wrapper.setProps(props)

            // Assert
            expect(global.scrollTo).not.toHaveBeenCalled()
        })
    })
})