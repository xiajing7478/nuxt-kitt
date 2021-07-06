const direct2 = (el, binding, vnode) => {
    console.log('全局指令2')
        // console.log('el', el)
        // console.log('binding', binding)
        // console.log('vnode', vnode)
}

export default {
    inserted(el, binding, vnode) {
        direct2(el, binding, vnode)
    },
    componentUpdated(el, binding, vnode) {
        direct2(el, binding, vnode)
    }
}