const reservoir = require('../services/reservoir')

const getListings = () => {
  reservoir.listings
    .getListingsChangePercent()
    .then(() => {
      setTimeout(getListings, 10000)
    })
    .catch(() => setTimeout(getListings, 10000))
}

module.exports = getListings
