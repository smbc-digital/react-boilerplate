import 'isomorphic-fetch'

async function submitForm(context) {
    const convertedContext = {}
    
    Object.keys(context).map(key => {
        if (context[key] !== undefined && context[key].value !== undefined) {
            convertedContext[key] = context[key].value
        }
    })

    const rawResponse = await fetch('/example/submit', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(convertedContext)
    })

    return rawResponse
}

export default submitForm