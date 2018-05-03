var recipes = {placeholder:"a"}

function updateObjectWithKeyAndValue(obj, key, val){
  var newObj = Object.assign(obj, {[key]: val})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  return obj[key] = val
}

