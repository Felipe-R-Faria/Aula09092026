class contaBancaria {
    #saldo;

    constructor(titular, saldoInicial=0){
        this.titular = tilular;
        this.#saldo =  saldoInicial
    }

    get saldo(){
        return this.#saldo
    }

    depositar(valor){
        if (valor < 0)
            {
                throw new console.error("O valor a ser depositado deve ser maior que zero");
            
            }
        this.#saldo += valor;
    }
    sacar(valor)
    {
        if(this.valor < 0)
            {
                throw new Error("Saque de valor negativo")
            }
        if (this.#saldo >= valor)
            {
                this.#saldo -= valor
            }
        else
            {
                throw new Error("Erro: saldo insuficiente")
            }
    }

}