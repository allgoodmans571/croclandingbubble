app1 = new Vue({
    el: "#form_radio1",
    
    data: {
        counter: 0,
    },
    methods: {
        yes(){
            this.counter = 1
        },
           
        no(){
            this.counter = 0
    
        },
    },
               
});

app2 = new Vue({
    el: "#form_radio2",
    
    data: {
        counter: 0,
    },
    methods: {
        yes(){
            this.counter = 1
        },
        no(){
            this.counter = 0
        }
    },
});

app3 = new Vue({
    el: "#form_radio3",
    
    data: {
        counter: 0,
    },
    methods: {
        yes(){
            this.counter = 1
        },
        no(){
            this.counter = 0
        }
    },
});

app4 = new Vue({
    el: "#form_radio4",
    
    data: {
        counter: 0,
    },
    methods: {
        yes(){
            this.counter = 1
        },
        no(){
            this.counter = 0
        }
    },
});

app5 = new Vue({
    el: "#form_radio5",
    
    data: {
        counter: 0,
    },
    methods: {
        yes(){
            this.counter = 1
        },
        no(){
            this.counter = 0
        }
    },
});

app6 = new Vue({
    el: "#form_radio6",
    
    data: {
        counter: 0,
    },
    methods: {
        yes(){
            this.counter = 1
        },
        no(){
            this.counter = 0
        }
        
    },
});



app7 = new Vue({
    el: "#btn",
    data: {

    },
    methods: {
        result(){
            alert(app1.counter + app2.counter + app3.counter + app4.counter + app5.counter + app6.counter)
        }
    }
})

