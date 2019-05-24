import { React, mount } from '../../helpers/SetupTest'
import Provider from '../Provider'
import { Context } from '../../context'

describe('Provider', () => {
    const setStateMock = jest.fn()
    const useStateMock = jest.fn()
    let wrapper
    
    beforeEach(() => {
        React.useState = useStateMock
        
        useStateMock.mockReturnValue([{}, setStateMock])
        wrapper = mount(<Provider/>)
    })

    it('should create the base state with objects', () => {
        //Assert
        expect(wrapper.find(Context.Provider).exists).toBeTruthy()
    })

    describe('reCaptcha', () => {
        it('should set display reCaptcha correctly when no div exists', () => {
            const state = useStateMock.mock.calls[0][0]

            //Assert
            expect(state.displayRecaptcha).toBe(false)
        })

        it('should set display reCaptcha correctly when div exists and value is true', () => {
            document.getElementById = jest.fn()
            document.getElementById.mockReturnValue(
                {
                    innerHTML: 'true'
                }
            )
            
            //Act
            mount(<Provider/>)
            const state =  useStateMock.mock.calls[useStateMock.mock.calls.length-1][0]

            //Assert
            expect(state.displayRecaptcha).toBe(true)
        })

        it('should set display reCaptcha correctly when div exists and value is false', () => {
            document.getElementById = jest.fn()
            document.getElementById.mockReturnValue(
                {
                    innerHTML: 'false'
                }
            )
            
            //Act
            mount(<Provider/>)
            const state =  useStateMock.mock.calls[1][0]

            //Assert
            expect(state.displayRecaptcha).toBe(false)
        })
    })

    describe('onChange', () => {
        it('should call setState', () => {
            //Arrange 
            const onChange = useStateMock.mock.calls[0][0].onChange

            //Act
            onChange({
                    target: {
                        name: 'test',
                        value: 'some test value'
                    }
                }, true)

            //Assert
            expect(setStateMock).toHaveBeenCalledWith({
                test: {
                    value: 'some test value',
                    isValid: true
                }
            })
        })
    })
})