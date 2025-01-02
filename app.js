const app = Vue.createApp({
    data() {
        return {
            q: 0,
            t: 0,
            taxa: 0,
            resultado: 0
        }
    },
    methods: {
        calcularTaxaEquivalente() {
            const taxaC = Number(this.taxa) / 100;
            const qC = Number(this.q);
            const tC = Number (this.t);

            if (isNaN(taxaC) || isNaN(qC) || isNaN(tC)) {
                alert("Por favor digite valores válidos.");
                this.resultado = 0;
                return;
            }

            this.resultado = ((1 + taxaC) ** (qC/tC) - 1) * 100;
        }
    }
}).mount('#app');