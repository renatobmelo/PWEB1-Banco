class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoData = document.querySelector('#data');
        const elementoTipoDeConta = document.querySelector('#tipoConta')
        const valorTipoConta = elementoTipoDeConta.options[elementoTipoDeConta.selectedIndex].value;
        console.log(valorTipoConta);
        
        switch (valorTipoConta){
            case 'conta': {
                const conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
                this.repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                console.log('foi criada conta')
                break;
            }
            case 'conta-bonificada': {
                const conta = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value), elementoData.value);
                this.repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                console.log('foi criada conta-bonificada')
                break;
            }
            case 'poupança': {
                const conta = new Poupanca(elementoNumero.value, Number(elementoSaldo.value), elementoData.value);
                this.repositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                console.log('foi criada poupança')
                break;
            }
        }
        /** TESTE COM IF
        if (valorTipoConta === 'conta') { 
                console.log(valorTipoConta); 
            }
            else if (valorTipoConta === 'conta-bonificada'){
                console.log(valorTipoConta); 
            }
            else {
                console.log('poupança');
            }
        */
        //this.repositorioContas.adicionar(conta);
        //this.inserirContaNoHTML(conta);
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}
