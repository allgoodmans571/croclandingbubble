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

result0 = new Vue({
    el: "#result0",
    data: {
        visible: false
    }
})

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

result4 = new Vue({
    el: "#result4",
    data: {
        visible: false
    }
})

result5 = new Vue({
    el: "#result5",
    data: {
        visible: false
    }
})

result6 = new Vue({
    el: "#result6",
    data: {
        visible: false
    }
})

var results

result = new Vue({
    el: "#btn__result",
    data: {

    },
    methods: {

        result(){
            results = app1.counter + app2.counter + app3.counter + app4.counter + app5.counter + app6.counter

            result0.visible = false
            result1.visible = false
            result2.visible = false
            result3.visible = false
            result4.visible = false
            result5.visible = false
            result6.visible = false
            
            if (results == 6) {
                result6.visible = true
            
            } else if (results == 5){
                result5.visible = true

            } else if (results == 4) {
                result4.visible = true
            
            } else if (results == 3) {
                result3.visible = true
            
            } else if (results == 2) {
                result2.visible = true
            
            } else if (results == 1) {
                result1.visible = true
            
            } else if (results == 0) {
                result0.visible = true
            }

            setTimeout(function scrollToResult() {
                window.scrollTo(0, document.body.scrollHeight)
            }, 1)  
        },

    },

});

async function sendData() {
    let Points = results
    let Mail = document.getElementById('mail');
  
    let data = {
      Points: Points,
      Mail: Mail.value
    };
  
    console.log(data);
  
    let response = await fetch('http://localhost:80/getData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });
  };  