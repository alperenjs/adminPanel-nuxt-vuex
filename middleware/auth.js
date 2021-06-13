export default function (context) {
    if(!context.store.getters.isAuthenticated){
        console.log("middlewaer - auth")
        context.redirect('/admin/auth')
    }
}