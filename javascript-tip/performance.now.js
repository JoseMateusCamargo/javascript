// Use performance.now to measure executation speed
// The performance API will deliver a much more accurate measurement.

//-------------------- [Do this]
const start = performance.now();

for (let i = 0; i < 1e4; i++) {
    console.log('Using performance.now ...')
}

const end = performance.now();
const time = start - end
console.log(time)

//-------------------- [Don't do this]
const start_ = new Date();

for (let i = 0; i < 1e4; i++) {
    console.log('Using date ...')
}

const end_ = new Date();
const time_ = start_.getTime() - end_.getTime()
console.log(time_)