// 請介紹兩個字串方法跟數字方法

// padStart(len, str) *es2017之後才有的方法
// 說明:根據給定長度自動在字符串的前面補充想補充的字符串（只返回修改後的字符串，不修改原字符串）
// len:給定的長度，轉換後
// str:想補充的字符串
let str1: string = '5';
console.log(str1.padStart(5, '0'));

// padEnd(len, str) *es2017之後才有的方法
// 說明:根據給定長度自動在字符串的後面補充想補充的字符串（只返回修改後的字符串，不修改原字符串）
// len:給定的長度，轉換後
// str:想補充的字符串
let str2: string = 'A';
console.log(str2.padEnd(10, '0'));

// concat()
// 說明:concat方法可以用來合併字串，可以合併2個或多個字串。
let str3: string = '老師';
console.log(str3.concat('，', '您好厲害'));
console.log(str3.concat('，').concat('您').concat('好厲害'));

// toFixed(N)
// 說明:取小數第N位
let radius: number = 3.14159265358979323846;
console.log(radius.toFixed(3));

// parseFloat(str)
// 說明:parseFloat 會分析他自己的參數，字串 str，並試著返回浮點數。
// 如果遇到正負符號 (+ 或 -)、數字 (0-9)、小數點、指數以外的字元，
// 他就會返回在此之前的數值，並忽略那些字元。
// 如果連第一個字元也不可以轉換為數字，就會返回〝NaN〞（不是數字）。
// 注意： 字符串中只返回第一個數字。
// 注意： 開頭和結尾的空格是允許的。
// 注意： 如果字符串的第一個字符不能被轉換為數字，那麼 parseFloat() 會返回 NaN。
let test1: string = '008899';
console.log(Number.parseFloat(test1));
let test2: string = ' 99 ';
console.log(Number.parseFloat(test2));
let test3: string = "He was 40";
console.log(Number.parseFloat(test3));


// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log('乾爹');
} else {
    console.log('再接再厲');
}