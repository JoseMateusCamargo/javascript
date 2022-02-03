const some_obj = {
    name: 'one', age: 33, online: true
}

JSON.stringify(some_obj, null, 2)
/* output:
{
    "name": "one",
    "age": 33,
    "online": true
 } */

JSON.stringify(some_obj)
// output: {"name": "one",    "age": 33,    "online": true }