# Planium_API

Sistema de registro e exibição de clientes.

* Instale as dependências do front e back end
 ~~~
cd backend
npm install
npm start
-------------
cd frontend
npm install 
npm start
~~~

### Rotas
* #### Front end
    - Registro - http://localhost:3000/
        </br>
    - Resultados - http://localhost:3000/results
---
* #### Back end
    - GET http://localhost:3010/get
        - Exibe uma lista de beneficiarios registrados.
        </br>
    - POST http://localhost:3010/post
        - Rota para inserir novo registro.
            <details><summary>Exemplo</summary>

            ~~~
            {
                "quantidade": 3,
                "plano": "reg1",
                "beneficiario":[
                    {
                        "nome":"Marcos",
                        "idade":20
                    },
                    {
                        "nome":"Claudio",
                        "idade":30
                    },
                    {
                        "nome":"Andreia",
                        "idade":40
                    }
                ]
            }
            ~~~
            </details>
        </br>
    - GET http://localhost:3010/proposta
        - Exibe todas as informações armazenadas (planos, preços e lista de beneficiários)