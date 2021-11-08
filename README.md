# Estante de livros

Uma estante virtual de livros que permite cadastrar livros usando uma integração Django-React com Axios. 

Inspirado no tutorial do [Bek Brace](https://youtu.be/n2T9rmFmo48) e no curso do [freeCodeCamp.org](https://youtu.be/4UZrsTqkcW4). 

## Instruções
Abrir o terminal
### Instalando `node` e `npm`
1. Verificar se você já os possui instalados

    * ```node --version```

    * ```npm --version```

2. Se não tiver, você pode seguir [este tutorial](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos)

### Criando um App
1. Criar um App

    ```npx create-react-app frontend```
2. Mudar para a pasta do projeto 

    ```cd frontend```
3. Instalar as dependências

    ```npm install```
4. Iniciar o App
    
    ```npm start```

Podem aparecer alguns avisos na instalação, mas é seguro ignorá-los se o seu App estiver funcional. 

### Instalando `Django`
1. Criar um ambiente virtual com `pipenv`

    ```pip install pipenv```
2. Instalar as dependências do `Django`

    ```pipenv install djangorestframework```
    
    ```pipenv install django-cors-headers```