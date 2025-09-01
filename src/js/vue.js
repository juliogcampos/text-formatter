const { createApp } = Vue;

createApp({
    data() {
        return {
            textarea: {
                whitespace: `
                    Lorem     ipsum    dolor sit amet,  consectetur        adipiscing  elit. 
                    Mauris    aliquam           
                            luctus ullamcorper. 
                    Integer   id est enim. 
                            Sed id laoreet arcu. 
                    Sed vel ligula in   
                        diam lacinia tempor   eget ut purus.
                `,
                unescape: ''
            }
        }
    },
    methods: {

        removeExcessWhitespace() {
            this.textarea.whitespace = this.textarea.whitespace
                .replace(/\s+/g, ' ')
                .trim()
        },

        unescapeText() {
            this.textarea.unescape = this.textarea.unescape.replace(/\\n/g, '\n');
            this.textarea.unescape = this.textarea.unescape.replace(/\\/g, '');
        },

        clearTextarea() {
            this.textarea = "";
        },

        async copyTextToClipboard(key) {
            try {
                await navigator.clipboard.writeText(this.textarea[key])
                alert('Texto copiado para a área de transferência!')
            } catch (err) {
                console.error('Falha ao copiar: ', err)
            }
        }

    }
}).mount('#app')
