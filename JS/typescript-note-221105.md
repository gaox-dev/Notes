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



# 模块寻找

我们知道引用 JS 文件，需要为它写 d.ts 文件，此时拥有 d.ts 的文件，我们 可以把它看做 js + d.ts = .ts 

在 ts2.0 版本之后，我们直接直接通过 npm install @types/xxx 安装 d.ts 文件

```sh
mkdir ts-modules
cd ts-modules
tsc --init   //生成tsconfig.json
npm init -y  //生成package.json
npm install jquery @types/jquery -S
```

在`tsconfig.json` 文件内加上一行

```json
    "outDir": "./dist"
```

在命令行执行

```sh
tsc    //ts文件compile
```

