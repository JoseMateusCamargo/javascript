const cart = [
    {
        itemId: "szXwXmq9i0HpHS1_OlxxN", dateAdded: "06/14/2020 4:41:48 PM UTC", isItemAvailable: true,
        quantity: 2, price: 10.12,
    },
    {
        itemId: "hKhoBgnD0cccymkGlGHaZ", dateAdded: "06/14/2020 4:51:50 PM UTC", isItemAvailable: true,
        quantity: 3, price: 15.01,
    },
    {
        itemId: "EvxqG2f4Edd55DpRdcJ8y", dateAdded: "06/14/2020 4:56:01 PM UTC", isItemAvailable: true,
        quantity: 1, price: 24.98,
    },
    {
        itemId: "tJONu8dVSWWTZbbElvZBP", dateAdded: "06/14/2020 5:00:20 PM UTC", isItemAvailable: false,
        quantity: 1, price: 35.6,
    },
]

// ------------------- Using .map()
const localizeDate = (utcStr = "") => new Date(Date.parse(utcStr)).toLocaleString()

const localizePrice = (price = 0) => price.toLocaleString("en-US", {style: "currency", currency: "USD"})

// Don't ❌
let localizedCart = []
cart.forEach(({dateAdded, price, ...item}) => {
    const localizedItem = {
        ...item, dateAdded: localizeDate(dateAdded), price: localizePrice(price),
    }
    localizedCart.push(localizedItem);
})

// Do ✅
let localizedCart = cart.map(({dateAdded, price, ...item}) => ({
    ...item, dateAdded: localizeDate(dateAdded), price: localizePrice(price),
}))


// ------------------- Using .filter()
// Don't ❌
let filteredCart = []
cart.forEach((item) => {
    if (Number(item?.price) >= 15) {
        filteredCart.push(item)
    }
})

// Do ✅
let filteredCart = cart.filter(({price}) => Number(price) >= 15)


// ------------------- Using .find() & .findIndex()
// Don't ❌
let maybeItem = null
let maybeIndex = 0
cart.forEach((item, index) => {
    if (Number(item?.quantity) < 2) {
        maybeItem = item
        maybeIndex = index
        return
    }
});

// Do ✅
const isQuantityLessThan2 = ({quantity}) => Number(quantity) < 2
let maybeItem = cart.find(isQuantityLessThan2)
let maybeIndex = cart.findIndex(isQuantityLessThan2)


// ------------------- .reduce()
// Don't ❌
let totalPrice = 0
cart.forEach(({price, quantity}) => {
    totalPrice += price * quantity
})

// Do ✅
// 0 is the initial value of the accumulator (sum)
let totalPrice = cart.reduce((sum, {price, quantity}) => sum + price * quantity, 0)


// ------------------- .every() & .some()
const isItemUnavailable = ({isItemAvailable}) => !isItemAvailable; // Our test condition

// Don't ❌
let doesContainUnavailableItems = false
cart.forEach(({isItemAvailable}) => {
    if (!isItemAvailable) {
        doesContainUnavailableItems = true
        return
    }
})

// Don't ❌
let doesContainUnavailableItems = cart.filter(isItemUnavailable).length > 0

// Don't ❌
let doesContainUnavailableItems = Boolean(cart.find(isItemUnavailable))

// Do ✅
let doesContainUnavailableItems = cart.some(isItemUnavailable)


// ------------------- .sort()
cart
    .filter(({isItemAvailable}) => isItemAvailable) // Get available items
    .sort((itemA, itemB) => itemA.quantity - itemB.quantity) // Sort by ascending order of quantity
    .map(({itemId, quantity, price}) => ({
        itemId,
        netPrice: quantity * price,
    })) // Only present itemId and netPrice

// Result:
// [
//   { itemId: "EvxqG2f4Edd55DpRdcJ8y", netPrice: 24.98 },
//   { itemId: "szXwXmq9i0HpHS1_OlxxN", netPrice: 20.24 },
//   { itemId: "hKhoBgnD0cccymkGlGHaZ", netPrice: 45.03 },
// ]