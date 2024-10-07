const express = require('express');
const app = express();

const {createClient} = require('redis');
const client = createClient();

const getAllProducts = async() => {
    const time = Math.floor(Math.random() * 2000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Product 1',
                    price: 100
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: 200
                }
            ]);
        }, time);
    });
}

app.get('/saved' , async (req, res) => {
    // 2º Solução
    // Caso eu atualize o cache em algum outro lugar, eu posso invalidar o cache
    // Dessa forma, o próximo request que chegar, irá atualizar o cache
    // E não teremos cache desatualizado    
    await client.del('getAllProducts');
    res.send({ok: true});
    }
);

app.get('/', async (req, res) => {
    const productsFromCache = await client.get('getAllProducts');
    if (productsFromCache) {
        res.send(JSON.parse(productsFromCache));
        return;
    }
    const products = await getAllProducts();

    // 1º Solução
    // await client.set('getAllProducts', JSON.stringify(products), {EX: 10});
    // EX 10 é um ttl de 10 segundos para aquele par chave value
    // Essa é uma solução simples para cache, mas não é a melhor
    // Exemplo:
    // Digamos que recebemos 100 requets por minuto e cada request demora 4 segundos
    // Sem o cache teríamos 400 segundos de processamento
    // Com o cache teríamos 40 segundos de processamento
    await client.set('getAllProducts', JSON.stringify(products));
    res.send(products);
    }
);

const startup = async() => {
    await client.connect();
    console.log('Connected to Redis');
    
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
startup();

