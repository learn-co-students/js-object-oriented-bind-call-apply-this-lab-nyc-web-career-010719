
function justInvoke(fn){
  fn()
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  newFn = functionToBeCopied.bind(thisValue)
  return newFn
}
