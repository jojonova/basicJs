const posts = [
  { title: 'Post one', body: 'This is post one' },
  { title: 'Post two', body: 'This is post two' },
]
function getPosts() {
  setTimeout(() => {
    console.log('1s more')

    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })

    document.body.innerHTML = output
    li = document.querySelector('li')
    li.addEventListener('click', function (e) {
      console.log(e)
    })
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(() => {
    console.log('2s')

    posts.push(post)
    callback()
  }, 2000)
}
// 异步顺序只会在队列上，settimeout的时间参数主进程不会等待它。
// 回调→使不同的异步有想要的执行顺序
createPost({ title: 'Post three', body: 'this is post three' }, getPosts)

//!await，将回调优雅的放在她的下一行
