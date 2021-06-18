export default function (context) {
    if(!context.store.getters['auth/isAuthenticated']){
        console.log("middlewaer - auth başarısız")
        context.redirect('/admin/auth')
    }
    // else{
    //     console.log("mid auth başarılı")
    //     context.redirect('/')
    // }
}