const direct1 = (el, binding, vnode) => {
    console.log('全局指令1')
    console.log('el', el)
    console.log('binding', binding)
    console.log('vnode', vnode)
}

export default {
    bind(el, binding, vnode) {
        direct1(el, binding, vnode)
    }
}