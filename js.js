var retrievedObject = localStorage.getItem('local');
retrievedObject = JSON.parse(retrievedObject);
if (retrievedObject === null) {
    retrievedObject = [];
}

var app5 = new Vue({
    el: '#app',
    data: {
        item: "",
        items: retrievedObject
    },
    methods: {
        addItem: function() {
            if (this.item !== '') {
                this.items.unshift({ text: this.item });
                localStorage.setItem('local', JSON.stringify(this.items));
            }
            this.item = '';
        }
    }
})