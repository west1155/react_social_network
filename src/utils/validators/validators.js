export const required = (value) => {
    if (value) return undefined
    return "Field is required"

}

// Zamikanije funkcija Creator vozvrashiajet funkciju s value, gde MaxLength prihodit iz roditelskoj funkcii s parametrom
export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

