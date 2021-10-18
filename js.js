var app5 = new Vue({
    el: '#app',
    data: {
        item: "",
        items: []
    },
    methods: {
        addItem: function() {
            if (this.item !== '') {
                this.items.unshift({ text: this.item });
            }
            this.item = '';
        }
    }
})