import showBreadcrumbs from './index.js'

describe('showBreadcrumbs', () => {
    it('should find div with id breadcrumb and remove hidden class when passed true', () => {
        // Arrange
        document.body.innerHTML = '<div id="breadcrumb" class="breadcrumb hidden"></div>'

        // Act
        showBreadcrumbs(true)
        var result = document.getElementById('breadcrumb').className
        
        // Assert
        expect(result).toEqual('breadcrumb')
    })
    it('should find div with id breadcrumb and add hidden class when passed false', () => {
        // Arrange
        document.body.innerHTML = '<div id="breadcrumb" class="breadcrumb"></div>'

        // Act
        showBreadcrumbs(false)
        var result = document.getElementById('breadcrumb').className
        
        // Assert
        expect(result).toEqual('breadcrumb hidden')
    })
    it('should do nothing when cant find breadcrumb', () => {
        //Arrange
        document.body.innerHTML = ''
        // Act
        showBreadcrumbs(false)
        var result = document.getElementById('breadcrumb')
        
        // Assert
        expect(result).toBeNull()
    })
})