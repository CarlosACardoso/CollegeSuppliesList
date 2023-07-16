# CollegeSuppliesList

#Projeto
Este projeto têm como ideia gerar um criador de listas para professores universitários de odontologia para os mesmos criarem listas de materiais escolares para os semestres.
Com esse projeto, professores podem criar listas utilizando imagens, nomes de produtos e marcas para seus alunos, os mesmos podem ter uma cópia da lista sem precisar de nenhum tipo de registro, apenas tendo o nome da lista. Os alunos não conseguem alterar a lista inicial se não tiverem a senha que corresponde a lista.

#Estrutura
Este projeto foi dividido me duas partes:
    Na primeira temos o Front-end, onde temos a interação do usuário, feito com React Js.
    Na segunda temos o Back-end, onde temos a gestão de informação, feito em Node Js

#Instruções de uso
Para ambos os projetos terem as funcionabilidades no qual foram projetados, é necessário que sejam seguidos os seguintes passos:
    1. Utilizado o Visual Studio Code, abra a pasta do projeto
    2. Abra um terminal e se posicione no diretório: '.../CollegeSuppliesList/NodeJs'
    3. Execute o comando 'npm run dev'
        No caso do funcionamento correto, será impresso no console: "Server started at port 3000"
    4. Abra um segundo terminal e se posicione no diretório: '.../CollegeSuppliesList/ReactJs'
    5. Execute o comando 'npm run dev'
        No caso de apresentar um erro como: 
            'vite' não é reconhecido como um comando interno        
             ou externo, um programa operável ou um arquivo em lotes.'
        Utilize a função 'npm install vite' e tente executar novamente o item 5.


#Utilização do sistema:
Utilizando uma lista pronta:
    -Caso você já tenha uma lista salva, coloque o ID ou nome da lista no campo 'Digite o id da lista' e aperte 'Buscar Lista'.
    -Neste caso serão apresentados os itens da lista desde o último salvamento.
    -Você pode filtar seus itens pela no campo "Digite para pesquisar itens na lista" (pesquisas por este campo apenas verificam o nome do item) ou também filtar por itens já realizados/comprados ou não.
    -Ao final do site temos o espaço para a adiação de novos itens, onde o primeiro campo de imagem se destina a URL da imagem, podem escolher uma imagem na internet para isso, os campos nome e marca são livres, o campo quantidade é limitado a apenas números inteiros e positivos e por fim se o item é opcional ou não.(O sistema não adicionará um novo item caso falte o preenchimento de algum campo.)
    -Ao clicar no botão 'Adicionar Item' um novo item será adicionado.
    -Cada item têm o seu próprio botão de Marcar/Desmarcar que deixa evidente se o item está marcado ou desmarcado, assim como cada item têm o seu próprio botão de excluir o item.

Salvando uma lista:
    -Para salvar uma lista basta preencher o nome da lista e a senha da lista e então apertar o botão 'Salvar Lista'
    -Uma lista só poderá ser salva(sobreescrita) caso o nome da lista e a senha dessa mesma lista estajam certas.
    -Caso o nome estiver errado, será gerada uma nova lista, com os itens atuais do sistema e com a senha descrita no campo senha.
    -Caso a senha esteja errada, será aprensentada ao lado do botão de salvar, que a mesma está errada.

Criando uma nova lista:
    -Caso você não tenha uma lista, você pode simplesmente criar uma adicionando itens ou abrir uma que você deseja clonar, trocar o nome e adicionar uma senha. Este método não altera os itens da lista original. 
    