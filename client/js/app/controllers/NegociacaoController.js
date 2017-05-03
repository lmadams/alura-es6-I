class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adicona(event) {
        event.preventDefault();

        var dataNegoc = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, index) => item - index % 2)
        );
        let negociacao = new Negociacao(
            dataNegoc,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        // Adiciona a negociacao
    }
}