const fieldReducer = (oldFields, action) =>
{
    const { helper = null, field, type, value } = action

    switch (type)
    {
        case "RESET":
            Object.keys(oldFields).forEach(key =>
            {
                oldFields[key].value = ""
                oldFields[key].helper = null
            })
            return oldFields;
        case "SET":
            return { ...oldFields, [field]: { value, helper } }
        case "TOGGLE":
            return { ...oldFields, [field]: { value: oldFields[field].value, helper } }
        default:
            return oldFields
    }
}

export default fieldReducer;