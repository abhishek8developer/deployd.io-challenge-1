export function validateEmptyForm(fields: any, updateStatus: any) {
  if (!fields.username && !fields.password) {
    updateStatus(
      true,
      'Username Password both are required. Atleast 3 characters.'
    )
    return false // non validated form
  }
  if (!fields.username) {
    updateStatus(true, 'Username required. Atleast 3 characters.')
    return false // non validated form
  }
  if (!fields.password) {
    updateStatus(true, 'Password required. Atleast 3 characters.')
    return false // non validated form
  }
  return true // validated form
}

export function validateFormFieldLength(
  fields: any,
  updateStatus: any,
  fieldLength: number = 3
) {
  if (
    fields.username.length < fieldLength &&
    fields.password.length < fieldLength
  ) {
    updateStatus(
      true,
      `Username Password is expected to be atleast ${fieldLength} characters`
    )
    return false // non validated form
  } else if (fields.username.length < fieldLength) {
    updateStatus(
      true,
      `Username is expected to be atleast ${fieldLength} characters`
    )
    return false // non validated form
  } else if (fields.password.length < fieldLength) {
    updateStatus(
      true,
      `Password is expected to be atleast ${fieldLength} characters`
    )
    return false // non validated form
  }
  return true // validated form
}
