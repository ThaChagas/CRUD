function salvarToken(token){
    localStorage.setItem('token', token)
}

function obterToken(token){
    return localStorage.getItem("token");
}

function salvarUsuario(usuario){
    return localStorage.setItem('usuario', JSON.stringify(usuario));
}

function obterUsuario(usuario){
    let usuarioStorage = localStorage.getItem("usuario");
    return JSON.parse(usuarioStorage);
}

function sairDoSistema(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.open('login.html', '_self');
}

function usuarioEstaLogado(){
    let token = obterToken();

    return token ? true : false;
}

function validarUsuarioAutenticado(){
    let logado = usuarioEstaLogado();

    if(window.location.pathname == '/login.html'){

        if(logado)
            window.open('home.html', '_self')
    } else {
        if(!logado)
            window.open('login.html', '_self');
    }
}

validarUsuarioAutenticado();