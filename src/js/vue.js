var app = new Vue({
    el: '#app',
    data: {

        textarea: {
            clearTextFormatting: `
            Lorem     ipsum    dolor sit amet,  consectetur        adipiscing  elit. 
            Mauris    aliquam           
                    luctus ullamcorper. 
            Integer   id est enim. 
                    Sed id laoreet arcu. 
            Sed vel ligula in   
                diam lacinia tempor   eget ut purus. `
        }
    },

    methods: {
        clearTextFormatting() {
            this.textarea.clearTextFormatting = this.textarea.clearTextFormatting.replace(/\s+/g, ' ').trim();
        }
    }
})