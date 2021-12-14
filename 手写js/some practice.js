// function resetArray(arr, newarr = []) {
//   if (!arr) return newarr

//   arr.forEach((element) => {
//     Array.isArray(element) ? resetArray(element, newarr) : newarr.push(element)
//   })
//   return newarr
// }
//*数组摊平
//todo 注意与深拷贝的区别
function resetArray(arr, newarr = []) {
  if (!Array.isArray(arr) || arr === null) return

  arr.forEach((element) => {
    Array.isArray(element) ? resetArray(element, newarr) : newarr.push(element)
  })
  return newarr
}

console.log(resetArray([1, [2, 3, [4, 5]]]))

//深拷贝和遍历对象
//*普通属性（不包括继承）
//todo key1 for in+hasOwnProperty
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}
//todo key2 Object.keys
console.log(deepClone([1, [2, 3], [1, [2, [3]]]]))

//解决循环引用 参考摊平数组，这里用map存储引用
function deepClonewithMap(obj, map = new Map()) {
  if (typeof obj !== 'object' || obj === null) return obj
  let newObj = Array.isArray(obj) ? [] : {}
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, newObj)
  for (const key in obj) {
    newObj[key] = deepClonewithMap(obj[key], map)
  }
  return newObj
}

const test = {
  key1: 1,
  key2: {
    child: 'child',
  },
}
test.bindkey = test
console.log(deepClonewithMap(test))
