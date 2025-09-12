// function mailSender(to,sub,body){
//     console.log(`mailsent to ${to} with subject ${sub} and body ${body}`)
// }

// mailSender("abc@gmail.com", "hello");

// function mailSender(to){
//     return function(sub){
//         return function(body){
//             console.log(`mailsent to ${to} with subject ${sub} and body ${body}`)
//         }
//     }
// }
// mailSender("abc@gamil.com")("sub")("hi")


function orderbooking(login){
    return function(cart){
        return function(product_summery){
            return function(checkout){
                return function (payment){
                    return function(orderplaced){
                        console.log(`${login}has select${cart} product summery is${product_summery}quantity${checkout} payment done ${payment} and order has been confirmed ${orderplaced}`)
                    }
                }
            }
        }
    }

}

orderbooking("abc@gmail.com")("tshirt")("description lar")("count-1")("1500")("placed");