import showBreadcrumb from './index.js'

describe('showBreadcrumb', () => {
    it('should find div with id breadcrumb and remove hidden class when passed true', () => {
        // Arrange
        document.body.innerHTML = '<div id="breadcrumb" class="breadcrumb hidden"></div>'

        // Act
        showBreadcrumb(true)
        var result = document.getElementById('breadcrumb').className
        
        // Assert
        expect(result).toEqual('breadcrumb')
    })
    it('should find div with id breadcrumb and add hidden class when passed false', () => {
        // Arrange
        document.body.innerHTML = '<div id="breadcrumb" class="breadcrumb"></div>'

        // Act
        showBreadcrumb(false)
        var result = document.getElementById('breadcrumb').className
        
        // Assert
        expect(result).toEqual('breadcrumb hidden')
    })
})