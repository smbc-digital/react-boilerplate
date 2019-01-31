import json_data from './pagenames.json'

export const getPageRoute = (pageNumber) => {
    let page = json_data.filter(page => page.number === pageNumber)[0]

    return page.route
}