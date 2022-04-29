const { PORT, NETWORK_DEVICE } = require('./utils/config')
const express1 = require("./app")

const express1Listiner = express1.listen(PORT, NETWORK_DEVICE, () =>
{
    console.log(`Server running on port ${PORT}`)
})

module.exports = express1Listiner

