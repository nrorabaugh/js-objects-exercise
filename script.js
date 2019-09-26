let calculator = {
    value: 0,

    add: function(num1, num2) {
        if(num2 === undefined){
            num2 = num1
            num1 = this.value
        }
        let result = num1 + num2
        this.value = result
        return this.value
    },

    subtract: function(num1, num2) {
        if(num2 === undefined){
            num2 = num1
            num1 = this.value
        }
        let result = num1 - num2
        this.value = result
        return this.value
    },

    multiply: function(num1, num2) {
        if(num2 === undefined){
            num2 = num1
            num1 = this.value
        }
        let result = num1 * num2
        this.value = result
        return this.value
    },

    divide: function(num1, num2) {
        if(num2 === undefined){
            num2 = num1
            num1 = this.value
        }
        let result = num1 / num2
        this.value = result
        return this.value
    },

    exp: function(num1, num2) {
        if(num2 === undefined){
            num2 = num1
            num1 = this.value
        }
        let result = Math.pow(num1, num2)
        this.value = result
        return this.value
    },

    rootDimension: function(num1, num2) {
        if(num2 === undefined){
            num2 = num1
            num1 = this.value
        }
        let invexp = 1/num2
        let result = Math.pow(num1, invexp)
        this.value = result
        return this.value
    },
    clear: function() {
        this.value = 0
    }
}