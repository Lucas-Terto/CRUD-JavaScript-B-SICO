
//[CRUD] JavaScript BÁSICO
const miniTwitter = {
    usuarios: [
        {
            username: 'lucasterto',
        }
    ],
    posts: [
        {
            id: 1,
            owner:'lucasterto',
            content: 'Meu primeiro tweet',
        }
    ]
};
//CREATE
function criaPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content,
    });
}
criaPost({owner: 'lucasterto', content: 'segundo tweet'})
console.log(miniTwitter.posts)

//READ
function pegaPost(){
    return miniTwitter.posts;
}
console.log(pegaPost())

//UPDATE
function atualizaContentDoPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPost().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPost())

//DELETE
function apagaPost(id){
    const listaDePostAtualizada = pegaPost().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostAtualizada
}

apagaPost(1)
console.log(pegaPost())
