# 基础类型

## 变量类型

+ number

+ string

+ 某类型数组-> `某类型[]` `Array<某类型>`

+ boolean

+ 元祖（和数组类似，）

+ any

  

## 类型转换

```typescript
let len = (<string>zhangsan.other).length;

let len2 = (zhangsan.other as string).length;
```

\





解构

```js
function somefunc({ a: x, ...b } = { a:'string a', b: 'string b', c: 'string c' }) {
    console.log(x)
    console.log(b)
}
```



# 接口与类

## interface

接口的作用就是去描述结构的形态

```ts
function somefunc1({ x = 0, y = 0 }: pointer2d) {
    // ...
}
function somefunc2({ x = 0, y = 0, z = 0 }: pointer3d) {
    // ...
}
interface pointer2d {
    x: number;
		y: number; 
}
interface pointer3d extends pointer2d {
    z: number;
}
```

