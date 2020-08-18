app1 = new Vue({
    el: "#form_radio1",
    
    data: {
        counter: 0,
        true_answer: false,
        false_answer: false
    },
    methods: {
        yes(){
            if (this.true_answer == false) {
                this.counter++
                this.true_answer = true
                this.false_answer = false
            }
        },
        no(){
            if (this.false_answer == false) {
                if (this.counter != 0) {
                    this.counter--
                }
                this.false_answer = true
                this.true_answer = false
            }
        }
    },
});

app2 = new Vue({
    el: "#form_radio2",
    
    data: {
        counter: 0,
        true_answer: false,
        false_answer: false
    },
    methods: {
        yes(){
            if (this.true_answer == false) {
                this.counter++
                this.true_answer = true
                this.false_answer = false
            }
        },
        no(){
            if (this.false_answer == false) {
                if (this.counter != 0) {
                    this.counter--
                }
                this.false_answer = true
                this.true_answer = false
            }
        }
    },
});

app3 = new Vue({
    el: "#form_radio3",
    
    data: {
        counter: 0,
        true_answer: false,
        false_answer: false
    },
    methods: {
        yes(){
            if (this.true_answer == false) {
                this.counter++
                this.true_answer = true
                this.false_answer = false
            }
        },
        no(){
            if (this.false_answer == false) {
                if (this.counter != 0) {
                    this.counter--
                }
                this.false_answer = true
                this.true_answer = false
            }
        }
    },
});

app4 = new Vue({
    el: "#form_radio4",
    
    data: {
        counter: 0,
        true_answer: false,
        false_answer: false
    },
    methods: {
        yes(){
            if (this.true_answer == false) {
                this.counter++
                this.true_answer = true
                this.false_answer = false
            }
        },
        no(){
            if (this.false_answer == false) {
                if (this.counter != 0) {
                    this.counter--
                }
                this.false_answer = true
                this.true_answer = false
            }
        }
    },
});

app5 = new Vue({
    el: "#form_radio5",
    
    data: {
        counter: 0,
        true_answer: false,
        false_answer: false
    },
    methods: {
        yes(){
            if (this.true_answer == false) {
                this.counter++
                this.true_answer = true
                this.false_answer = false
            }
        },
        no(){
            if (this.false_answer == false) {
                if (this.counter != 0) {
                    this.counter--
                }
                this.false_answer = true
                this.true_answer = false
            }
        }
    },
});

app6 = new Vue({
    el: "#form_radio6",
    
    data: {
        counter: 0,
        true_answer: false,
        false_answer: false
    },
    methods: {
        yes(){
            if (this.true_answer == false) {
                this.counter++
                this.true_answer = true
                this.false_answer = false
            }
        },
        no(){
            if (this.false_answer == false) {
                if (this.counter != 0) {
                    this.counter--
                }
                this.false_answer = true
                this.true_answer = false
            }
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