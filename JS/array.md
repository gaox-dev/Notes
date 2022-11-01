**Array**

- map()方法接受一个函数作为参数。该函数调用时，map()方法向它传入三个参数：当前成员、当前位置和数组本身。
- forEach()的用法与map()方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。



如果数组遍历的目的是为了得到返回值，那么使用map()方法，否则使用forEach()方法。



- filter()方法用于过滤数组成员，满足条件的成员组成一个新数组返回。



它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。

- reduce()方法和reduceRight()方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce()是从左到右处理（从第一个成员到最后一个成员），reduceRight()则是从右到左（从最后一个成员到第一个成员），其他完全一样。



假设我们有一个数组，每个元素是一个人。你面前站了一排人。 foreach 就是你按顺序一个一个跟他们做点什么，具体做什么，随便:

```js
 people.forEach(function (dude) {

  dude.pickUpSoap();

 });

 var wallets = people.map(function (dude) {

  return dude.wallet;

 });

 var totalMoney = wallets.reduce(function (countedMoney, wallet) {

  return countedMoney + wallet.money;

 }, 0);

 var fatWallets = wallets.filter(function (wallet) {

  return wallet.money > 100;

 });
```

