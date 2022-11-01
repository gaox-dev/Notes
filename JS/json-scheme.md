**Json Schema**



**jsonSchema1-商品**

```json
{

 "$schema": "https://json-schema.org/draft/2020-12/schema",

 "$id": "https://example.com/product.schema.json",

 "title": "Product",

 "description": "A product from Acme's catalog",

 "type": "object",

 "properties": {

  "productId": {

   "description": "The unique identifier for a product",

   "type": "integer"

  },

  "productName": {

   "description": "Name of the product",

   "type": "string"

  },

  "price": {

   "description": "The price of the product",

   "type": "number",

   "exclusiveMinimum": 0

  },

  "tags": {

   "description": "Tags for the product",

   "type": "array",

   "items": {

​    "type": "string"

   },

   "minItems": 1,

   "uniqueItems": **true**

  },

  "dimensions": {

   "type": "object",

   "properties": {

​    "length": {

​     "type": "number"

​    },

​    "width": {

​     "type": "number"

​    },

​    "height": {

​     "type": "number"

​    }

   },

   "required": [ "length", "width", "height" ]

  },

  "warehouseLocation": {

   "description": "Coordinates of the warehouse where the product is located.",

   "$ref": "https://example.com/geographical-location.schema.json"

  }

 },

 "required": [ "productId", "productName", "price" ]

}


```



**引入外部schema2**

```json
{

 "$id": "https://example.com/geographical-location.schema.json",

 "$schema": "https://json-schema.org/draft/2020-12/schema",

 "title": "Longitude and Latitude",

 "description": "A geographical coordinate on a planet (most commonly Earth).",

 "required": [ "latitude", "longitude" ],

 "type": "object",

 "properties": {

  "latitude": {

   "type": "number",

   "minimum": -90,

   "maximum": 90

  },

  "longitude": {

   "type": "number",

   "minimum": -180,

   "maximum": 180

  }

 }

}



**最后的json**

 {

  "productId": 1,

  "productName": "An ice sculpture",

  "price": 12.50,

  "tags": [ "cold", "ice" ],

  "dimensions": {

   "length": 7.0,

   "width": 12.0,

   "height": 9.5

  },

  "warehouseLocation": {

   "latitude": -78.75,

   "longitude": 20.4

  }

 }


```

**参考资料：**

1. https://json-schema.org/learn/getting-started-step-by-step
2. [https://www.cnblogs.com/makelu/p/11828274.html](https://www.cnblogs.com/makelu/p/11828274.htmlhttps://www.cnblogs.com/makelu/p/11828274.html)

