document.addEventListener('DOMContentLoaded', function () {
    // Elementos
    const inicioLink = document.getElementById('inicio-link');
    const inicioConteudo = document.getElementById('inicio-conteudo');
    const inicioImagem = document.getElementById('inicio-imagem');
    const servicosLink = document.querySelector('a[href="#servicos"]');

    // Caminho para a imagem do "Início"
    const imagemSrc = 'images/capa1.png'; // Substitua pelo caminho da imagem desejada

    // Evento de clique
    inicioLink.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão de rolar para a seção
        document.querySelector('#servicos').scrollIntoView({
            behavior: 'smooth' // Adiciona rolagem suave
        });

        // Atualiza o src da imagem e mostra o conteúdo
        inicioImagem.src = imagemSrc;
        inicioConteudo.classList.remove('hidden');
        inicioConteudo.classList.add('show');

        // Opcional: rolar para a seção
        inicioConteudo.scrollIntoView({ behavior: 'smooth' });


        
    });
});
