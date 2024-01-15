const Car = require('./car')

function foo () {
    return 'the foo'
}

describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).toBe(3+2)
        expect(5).not.toBe(6)
        expect(5).toBeLessThan(7)
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })
})
describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)
    })
})
describe('Car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        expect(prius).toHaveProperty('make', 'toyota')
        expect(prius).toHaveProperty('model', 'prius')
        expect(prius.make).toBeDefined()
        expect(prius.model).toBeDefined()
        expect(prius.make).toBe('toyota')
        expect(prius.model).toBe('prius')
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius' })
    })
    test('new cars start with the odometer at zero', () => {
        expect(prius).toHaveProperty('odometer', 0)
    })
})