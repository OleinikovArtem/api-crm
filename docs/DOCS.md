## Order

[ ] createOrder({ productId, count }[])
[ ] updateOrder({ address, fullName, phone, })

[ ] createPayment(orderId)
[ ] confirmPayment(confirmData)

[ ] getOrderById(orderId)
[ ] getUserOrdersByEmail(email)


## User

`interface User { address, fillname, phone, orders, ... }`

[X] getUser(): User `by token`
[ ] getUserByID(): User

[X] registration({ email, password, fullName, address? }): tokens
[X] login({ email, password }): tokens

