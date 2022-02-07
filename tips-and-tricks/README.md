<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="300">

# Tips and tricks JavaScript

## 15 Javascript codes you will always need

[Code](https://github.com/JoseMateusCamargo/javascript/blob/main/tips-and-tricks/15.codes.js)

---

#### Let's Go Code!

#### [1] Check if Date is Valid

```JavaScript
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 17, 1995 03:24:00");
// Result: true
```

#### [2] Copy to Clipboard

<i>Easily copy any text to clipboard using navigator.clipboard.writeText. </i>

```JavaScript
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("Hello World").then(r => console.log('Done'));
```

#### [3] Find the day of the year

```JavaScript
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());
// Result: 272
```

#### [4] Capitalize a String

```JavaScript
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")
// Result: Follow for more
```

#### [5] Find the number of days between two days

```JavaScript
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366
```

#### [6] Clear All Cookies

```JavaScript
const clearCookies = document.cookie.split(';')
    .forEach(cookie => document.cookie = cookie.replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

#### [7] Find the number of days between two days

```JavaScript
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());
// Result: #92b008
```

#### [8] Find the number of days between two days

```JavaScript
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]
```

#### [9] Get Query Params from URL

```JavaScript
const getParameters = (URL) => {
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}');

    return JSON.stringify(URL);
};
getParameters(window.location)
// Result: { search : "easy", page : 3 }
```

#### [10] Log Time from Date

```JavaScript
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
```

#### [11] Check if a number is even or odd

```JavaScript
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5
```

#### [12] Check if the array is empty

```JavaScript
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true
```

#### [13] Get Selected Text

```JavaScript
// Get the text the user has selected using inbuilt getSelectionproperty.
const getSelectedText = () => window.getSelection().toString();
getSelectedText();
```

#### [14] Detect Dark Mode

```JavaScript
// Check if a user’s device is in dark mode with the following code.
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode) // Result: True or False
```

#### [15] Shuffle an Array

```JavaScript
// Shuffling an array is super easy with sort and random methods.
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]
```

### Direitos de uso (Use rights)

<p>
  Você tem todo o direito de usar esse material para seu próprio aprendizado.<br/>
  You can use this material for your own learning.
</p>