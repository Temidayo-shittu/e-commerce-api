<script type="module" src="https://md-block.verou.me/md-block.js"></script>

# E-Commerce-Api



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [Auth](#auth)
    1. [Logout User](#1-logout-user)
    1. [Register User](#2-register-user)
    1. [Login User](#3-login-user)
* [User](#user)
    1. [Get All Users](#1-get-all-users)
    1. [Get Single User](#2-get-single-user)
    1. [Show Current User](#3-show-current-user)
    1. [Update User](#4-update-user)
    1. [Update User Password](#5-update-user-password)
* [Product](#product)
    1. [Create Products](#1-create-products)
    1. [Get All Products](#2-get-all-products)
    1. [Get Single Product](#3-get-single-product)
    1. [Update Product](#4-update-product)
    1. [Delete Product](#5-delete-product)
    1. [Upload Image](#6-upload-image)
    1. [New Request](#7-new-request)
    1. [Single Product Reviews](#8-single-product-reviews)
* [Review](#review)
    1. [Create Review](#1-create-review)
    1. [Get All Reviews](#2-get-all-reviews)
    1. [Get Single Review](#3-get-single-review)
    1. [Update Review](#4-update-review)
    1. [Delete Review](#5-delete-review)
* [Order](#order)
    1. [Create Order](#1-create-order)
    1. [Get All Orders](#2-get-all-orders)
    1. [Get Single Order](#3-get-single-order)
    1. [Get Current User Order](#4-get-current-user-order)
    1. [Update Order](#5-update-order)

--------



## Auth



### 1. Logout User



***Endpoint:***

```bash
Method: GET
Type: 
URL: 
```



### 2. Register User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/auth/register
```



***Body:***

```js        
{
    "name": "jake",
    "email": "jake@gmail.com",
    "passowrd": "newsecret"
}
```



### 3. Login User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/auth/login
```



***Body:***

```js        
{
   
    "email": "jake@gmail.com",
    "password": "secret"
}
```



## User



### 1. Get All Users



***Endpoint:***

```bash
Method: GET
Type: 
URL: 
```



### 2. Get Single User



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/users/6421ab70130eec9322e5bcf1
```



### 3. Show Current User



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/users/showMe
```



### 4. Update User



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/users/updateUser
```



***Body:***

```js        
{
    "name":"newjake",
    "email":"jake@gmail.com"
}
```



### 5. Update User Password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/users/updateUserPassword
```



***Body:***

```js        
{
    "oldPassword":"secret",
    "newPassword":"newsecret"
}
```



## Product



### 1. Create Products



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/products
```



***Body:***

```js        
{
    "name": "accent chair",
    "price": 25999,
    "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
}
```



### 2. Get All Products



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/products
```



### 3. Get Single Product



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/products/123
```



### 4. Update Product



***Endpoint:***

```bash
Method: PATCH
Type: 
URL: https://e-commerce-api-92je.onrender.com/products/123
```



### 5. Delete Product



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://e-commerce-api-92je.onrender.com/products/123
```



### 6. Upload Image



***Endpoint:***

```bash
Method: POST
Type: 
URL: https://e-commerce-api-92je.onrender.com/products/uploadImage
```



### 7. New Request



***Endpoint:***

```bash
Method: GET
Type: 
URL: 
```



### 8. Single Product Reviews



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/products/6425aa67f3999d213ee7dc08/reviews
```



## Review



### 1. Create Review



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/reviews
```



***Body:***

```js        
{
    
}
```



### 2. Get All Reviews



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/reviews
```



***Body:***

```js        
{
    
}
```



### 3. Get Single Review



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/reviews/123
```



***Body:***

```js        
{
    
}
```



### 4. Update Review



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/reviews/123
```



***Body:***

```js        
{
    
}
```



### 5. Delete Review



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: https://e-commerce-api-92je.onrender.com/reviews/123
```



***Body:***

```js        
{
    
}
```



## Order



### 1. Create Order



***Endpoint:***

```bash
Method: POST
Type: 
URL: https://e-commerce-api-92je.onrender.com/orders
```



### 2. Get All Orders



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/orders
```



### 3. Get Single Order



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/orders/1234
```



### 4. Get Current User Order



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-api-92je.onrender.com/orders/showAllMyOrders
```



### 5. Update Order



***Endpoint:***

```bash
Method: PATCH
Type: 
URL: https://e-commerce-api-92je.onrender.com/orders/1234
```



---
[Back to top](#e-commerce-api)

>Generated at 2023-04-06 10:09:50 by [docgen](https://github.com/thedevsaddam/docgen)
