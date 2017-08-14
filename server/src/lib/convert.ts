const convert = (obj: any) => {

  const result: any = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key].constructor
    }
  }
  return result
}

export default convert
