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
        },

        copyTextToClipboard() {

            // get the text field
            let copyText = document.getElementById("textarea");

            // select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // for mobile devices

            // copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);
        }
    }
})