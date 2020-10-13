const { forEach, map } = require('./index')
const assert = require('assert')


// //my own testing helper function
// const test = (desc, fn) => {
//     console.log('------', desc)
//     try {
//         fn()
//     } catch (err) {
//         console.log(err.message)
//     }
// }



// test forEach func
it('The forEach Function', () => {
    let sum = 0
    forEach([1,2,3,4], (value) => {
        sum += value
    })

    assert.strictEqual(sum, 10, 'Expected forEach to sum the array')
    console.log('Test passed')
    // if (sum != 10) {
    //     throw new Error('Exprected summing array to equal 10')
    // } else {
    //     console.log('Test passed')
    // }
})

// test map func
it('Test Map Function', () => {
    const result = map([1,2,3], value => {
        return value * 2
    })

    // option 1
    assert.deepStrictEqual(result, [2,4,6])

    // option 2
    // assert.strictEqual(result[0],2)
    // assert.strictEqual(result[1],4)
    // assert.strictEqual(result[2],6)
    //
    // option 3
    // if (result[0] !== 2) {
    //     throw new Error(`Expected to find 2, but found ${result[0]}`)
    // }
    // if (result[1] !== 4) {
    //     throw new Error(`Expected to find 4, but found ${result[0]}`)
    // }
    // if (result[2] !== 6) {
    //     throw new Error(`Expected to find 6, but found ${result[0]}`)
    // }
    console.log('Test passed')
})



