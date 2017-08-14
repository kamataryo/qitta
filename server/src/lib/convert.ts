const convert = (obj: any) => {

  const result: any = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (Array.isArray(value) && value.length > 0) {
        result[key] = [value[0].constructor]
      } else {
        result[key] = value.constructor
      }
    }
  }
  return result
}

export default convert
