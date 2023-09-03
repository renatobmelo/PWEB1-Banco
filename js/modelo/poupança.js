class Poupanca extends Conta {
    constructor(numero, saldo,dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    creditar(valor) {
        super.creditar(valor * 1.1);
    }

    get dataAniversario(){
        return this.dataAniversario;
    }

    set dataAniversario(novaData){
        this.dataAniversario = novaData;
    }

}