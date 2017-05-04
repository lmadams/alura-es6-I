class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negocoesView = new NegociacoesView($('#negociacoesView'));

        this._negocoesView.update(this._listaNegociacoes);
    }

    adicona(event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._listaNegociacoes.adiciona(negociacao);
        this._negocoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {

        /** Limpar os campos */
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        /** Foco no elemento */
        this._inputData.focus();
    }
}