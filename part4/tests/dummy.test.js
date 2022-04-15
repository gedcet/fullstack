const a = require('../utils/list_helper.js')
const totalLikes = require('../utils/list_helper.js')

test('dummy return vienas', () => 
{
    const blogs = []
    const result = a.dummy(blogs)
    expect(result).toBe(1)
})