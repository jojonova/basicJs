const randomData = {
  get string() {
    return Math.random().toString(36).slice(2, 6)
  },
  get number() {
    return (Math.random() * 10000) | 0
  },
  get boolean() {
    return !((Math.random() * 2) | 0)
  },
  get object() {
    return {
      id: this.number,
      name: this.string,
    }
  },
}

function randomTree(n, type = 'string') {
  //*创建root引用
  let root = {},
    arr = []
  for (let i = 0; i < n; i++) {
    const node = { element: randomData[type], children: [] }
    //todo 新节点进来作为哪个节点的子节点呢？即随机选爸爸，该式巧妙的实现了动态的均匀分布
    const parent = arr[(Math.random() * arr.length) | 0]
    //*第一个节点是没有父节点的，所以将其定为root节点
    parent ? parent.children.push(node) : (root = node)
    arr.push(node)
  }
  return root
}

root1 = JSON.parse(JSON.stringify(randomTree(6)))

console.log(root1)

function DFSRecursion(root, arr = []) {
  if (!root) return arr
  const { element, children } = root
  arr.push(element)
  children.forEach((child) => DFSRecursion(child, arr))
  return arr
}
function DFSwithStack(root, arr = []) {
  if (!root) return arr
  let stack = [root],
    current
  //*使用栈，先进后出，遍历顺序和递归是一样的
  //*不知道终止层数用→while
  while ((current = stack.pop())) {
    const { element, children } = current
    arr.push(element)
    for (let i = children.length - 1; i >= 0; i--) stack.push(children[i])
  }
  return arr
}

function BFSwithQueue(root, arr = []) {
  if (!root) return
  let queue = [root],
    current
  //*队列先进先出
  while ((current = queue.shift())) {
    const { element, children } = current
    arr.push(element)
    queue.push(...children)
  }
  return arr
}
console.log(DFSRecursion(root1))
