import submitForm from './index'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('submitForm', () => {
    beforeEach(() => {
		fetch.resetMocks()
	})

    it('should call frontend', async () => {
        let expectedResult = {status: 200}

        let data = {}

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith('/example/submit', expect.anything())
    })
})