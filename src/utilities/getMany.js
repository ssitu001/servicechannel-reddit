import get from 'lodash/get'
import reduce from 'lodash/reduce'

const getMany = (obj, objKeys) => {
  return reduce(objKeys, (arr, curr) => {
    arr.push(get(obj, curr))
    return arr
  }, [])
}

export default getMany
