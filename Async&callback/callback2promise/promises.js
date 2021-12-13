const posts=[
  {title:'Post one',body:'This is post one'},
  {title:'Post two',body:'This is post two'}
];
function getPosts(){
  setTimeout(()=>{let output='';
  posts.forEach((post,index)=>{
    output += `<li>${post.title}</li>`
  })
  document.body.innerHTML=output
  
},1000)

}

function createPost(post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     posts.push(post);
     const error = true
     if(error){
       resolve(posts)
     }else{
       reject('oops')
     } 
    },2000)
  })
}
// Promise
// createPost({title:'Post three',body:"this is post three"})
// .then(getPosts).catch(err=>console.log(err));


// Async  优美的async
// async function init(){
//   await createPost({title:'Post three',body:"this is post three"})
//   getPosts()
// } 

// init()

// AWAIT fetch 

async function fetchUsers(){
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await res.json()
  console.log(data);
  
}
fetchUsers()