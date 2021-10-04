const get = (obj, path) => {
  return path.split('.').reduce((obj, k) => (obj ? obj[k] : null), obj)
}

const handleErrors = async mutation => {
  let response
  try {
    response = await mutation
  } catch (e) {
    const errors = {}
    e.graphQLErrors.forEach(e => {
      const k =
        (e.message.match(/Field name = (.*)$/) || [])[1] ||
        get(e, 'data.field') ||
        get(e, 'attributes.field') ||
        '_error'

      if (!errors[k]) errors[k] = []
      errors[k].push(e)
    })
    if (Object.keys(errors).length === 0 && e.message) {
      errors._error = [e.message]
    }

    response = {errors}
  }
  return response
}

const Form = () => {}
Form.handleErrors = handleErrors

export default Form
