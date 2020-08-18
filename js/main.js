var app = new Vue({
    el: "#app-4",
    
    data: {
        message: "",
        output: ""
    },
    created() {

    },
    methods: {
        press(){
            this.output = this.message
        }
    },
});