function closure() {
  var res = 5
  console.log('noasync')
  return function () {
    console.log('async')
    res++
  }
}

function AsyncWithnoClosure() {
  setTimeout(function () {
    console.log('async')
  }, 2000)
}

setTimeout(closure(), 2000)
