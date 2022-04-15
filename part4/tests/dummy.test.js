const dummy = require('../utils/list_helper.js')

test('dummy return One', () => 
{
    const blogs = []

    const result = dummy(blogs)
    expect(result).toBe(1)
})