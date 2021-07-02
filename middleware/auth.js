export default (context) => {
    const { store, route, redirect, params, query, req, res } = context
    console.log('middleware', context)
}