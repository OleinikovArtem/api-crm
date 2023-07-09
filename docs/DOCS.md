## Order
- [ ] createOrder({ productId, count }[])
- [ ] updateOrder({ address, fullName, phone, })
- [ ] createPayment(orderId)
- [ ] confirmPayment(confirmData)
- [ ] getOrderById(orderId)
- [ ] getUserOrdersByEmail(email)

## Auth
- [x] registration({ email, password, fullName, address? }): tokens
- [x] login({ email, password }): tokens

## Products
- [x] createProduct(...)
- [x] getProducts(categories, limit, page)
- [x] countProducts(categories)
- [x] getCategories
