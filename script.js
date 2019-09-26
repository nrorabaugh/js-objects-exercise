let calculator = {
    add: function(num1, num2) {
        let result = num1 + num2
        return result
    },
    subtract: function(num1, num2) {
        let result = num1 - num2
        return result
    },
    multiply: function(num1, num2) {
        let result = num1 * num2
        return result
    },
    divide: function(num1, num2) {
        let result = num1 / num2
        return result
    },
    exp: function(num1, num2) {
        let result = Math.pow(num1, num2)
        return result
    },
    root: function(num1, num2) {
        let invexp = 1/num2
        let result = Math.pow(num1, invexp)
        return result
    }
}