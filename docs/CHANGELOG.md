### [EXAMPLE](CHANGELOG_EXAMPLE.md) !Always should be on the TOP!


----
## Changes: 13/08/2023
### Changed:
from:
```graphql
query getProducts($categories: [String!], $limit: Int, $page: Int) {
    countProducts(categories: $categories)
    products(limit: $limit, page: $page, categories: $categories) {
        id
    }
}
```

to:
```graphql
query getProducts($categories: [String!], $limit: Int, $page: Int) {
    products(limit: $limit, page: $page, categories: $categories) {
        totalCount
        items {
            id
            name
            description
            count
            price
            categories {
                name
            }
        }
    }
}
```

----
## Changes: 28/07/2023

### Added:

```graphql
mutation createOrder(
    $products: [OrderProductInput!]!
    $billingInfo: OrderBillingInfoInput!
) {
    createOrder(billingInfo: $billingInfo, products: $products) {
        status
        ...
        products {
            id
            ...
        }
    }
}


```
```graphql
query getOrders($limit: Int, $page: Int) {
    orders(limit: $limit, page: $page) {
        id
        status
        billingInfo {
            fullName
            id
            bio
            country
            city
            street
            houseNumber
            postalCode
        }
        products {
            id
            productId
            count
            product {
                price
                imageUrl
                id
                description
            }
        }
    }
}
```


----
## Changes: 09/07/2023

### Added:
- Added base for development `Order` module,
- Added GQL model for `Order` 

----
## Changes: 08/07/2023
### Changed:
from:
```graphql
query getProducts($categories: [String!], $limit: Int, $page: Int) {
    count(categories: $categories)
    products(limit: $limit, page: $page, categories: $categories) {
        id
    }
}
``` 
to:
```graphql
query getProducts($categories: [String!], $limit: Int, $page: Int) {
    countProducts(categories: $categories) // <-- CHANGED
    products(limit: $limit, page: $page, categories: $categories) {
        id
    }
}
```

----
## Changes: 07/07/2023

### Added:
```graphql
mutation registration($email: String!, $password: String!, $name: String!) {
    registration(email: $email, password: $password, name: $name) {
        access_token
        refresh_token
    }
}

```
```graphql
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        access_token
        refresh_token
    }
}
```

----
## Changes: 25/06/2023

### Added:
```graphql
mutation createProduct(
    $name: String!
    $description: String!
    $count: Int!
    $price: Float!
    $categories: [String!]
    $imageUrl: String!
) {
    createProduct(
        name: $name
        description: $description
        price: $price
        count: $count
        categories: $categories
        imageUrl: $imageUrl
    ) {
        name
        description
        id
        count
        imageUrl
        categories {
            name
        }
    }
}
```

```graphql
query getProducts($categories: [String!], $limit: Int, $page: Int) {
    count(categories: $categories)
    products(limit: $limit, page: $page, categories: $categories) {
        id
        name
        description
        count
        price
        categories {
            name
        }
    }
}

```

```graphql
query getCategories {
    categories {
        name
        id
    }
}
```