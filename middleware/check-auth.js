export default function (context) {
    console.log('Middleware - check auth')
    context.store.dispatch("auth/initAuth", context.req);
}