import { getPageRoute } from './index.js'

jest.mock('./pagenames.json', () => [
    {
        number: 1,
        route: '/test-1'
    },
    {
        number: 2,
        route: '/test-2'
    },
    {
        number: 3,
        route: '/test-3'
    }] )

describe('getRoutePage', () => {
    it('should get routes for page number', () => {
        //Arrange

        //Act
        let result = getPageRoute(3)

        //Assert
        expect(result).toBe('/test-3') 
    })
})