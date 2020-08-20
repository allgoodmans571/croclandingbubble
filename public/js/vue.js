
// counter results

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

result1 = new Vue({
    el: "#result1",
    data: {
        visible: false
    }
})

result2 = new Vue({
    el: "#result2",
    data: {
        visible: false
    }
})

result3 = new Vue({
    el: "#result3",
    data: {
        visible: false
    }
})


var results = 0

app7 = new Vue({
    el: "#btn",
    data: {

    },
    methods: {

        scrollToResult() {
            window.scrollTo(0, document.body.scrollHeight)
        },

        result(){
            results = app1.counter + app2.counter + app3.counter + app4.counter + app5.counter + app6.counter

            if (results > 4) {
                result1.visible = true
                
                result2.visible = false 
                result3.visible = false
            
            } else if (results > 2){
                result2.visible = true

                result1.visible = false
                result3.visible = false

            } else {
                result3.visible = true

                result1.visible = false
                result2.visible = false
            }

            this.scrollToResult()
            
        },

        },


});





//
// async function sendData() {
//   let Points = document.getElementById(app7.results);
//   let Mail = document.getElementById('mail');
//
//   let data = {
//     Points: Points,
//     Mail: Mail.value
//   };
//
//   console.log(data);
//
//   let response = await fetch('localhost:80/getData', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
//   });
// };
