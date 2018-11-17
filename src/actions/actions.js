export const INCREMENTBY = 'INCREMENTBY'
export const incBy = incValue => {
    const returnValue = {
            type: INCREMENT, 
            payload: {
                value: incValue
            }
        }
    return returnValue
}

export const INCREMENT = 'INCREMENT'
export const inc = incValue => {
    const returnValue = {
            type: INCREMENT
        }
    return returnValue
}