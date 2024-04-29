// data.js
const data = {
  products: {
    rolls: {
      lamb: {
        slug: 'lamb-rolls',
        variant: 'lamb',
        title: 'CountryPet Naturals™ New Zealand Lamb Recipe Dog Food Rolls',
        price: '11',
        productId: 'onetime123lamb',
        image: '/src/assets/images/products/red.png',
        onetime: {
          1: {
            discount: 3,
          },
          3: {
            discount: 6,
          },
          6: {
            discount: 9,
          },
        },
        subscription: {
          1: {
            price: 12,
            sellingPlan: 'sell123lamb',
            link: 'roll-lamb-sub-link-1',
          },
          3: {
            price: 34,
            productId: 'prod345lamb',
            sellingPlan: 'sell345lamb',
            link: 'roll-lamb-sub-link-3',
          },
          6: {
            price: 67,
            productId: 'prod678lamb',
            sellingPlan: 'sell678lamb',
            link: 'roll-lamb-sub-link-6',
          },
        },
      },
      venison: {
        slug: 'venison-rolls',
        variant: 'venison',
        title: 'CountryPet Naturals™ New Zealand Venison Recipe Dog Food Rolls',
        price: '11',
        productId: 'onetime123venison',
        image: '/src/assets/images/products/red.png',
        subscription: {
          1: {
            price: 12,
            productId: 'prod123venison',
            sellingPlan: 'sell123venison',
            link: 'roll-venison-sub-link-1',
          },
          3: {
            price: 34,
            productId: 'prod345venison',
            sellingPlan: 'sell345venison',
            link: 'roll-venison-sub-link-3',
          },
          6: {
            price: 67,
            productId: 'prod678venison',
            sellingPlan: 'sell678venison',
            link: 'roll-venison-sub-link-6',
          },
        },
      },
    },
    treats: {
      beef: {
        slug: 'beef-treats',
        variant: 'beef',
        title: 'New Zealand Raw Freeze-Dried Beef Liver Treats',
        price: '19.99',
        productId: 'onetime123beeftreats',
        sellingPlan: '1234567890',
        image: '/src/assets/images/products/green.png',
      },
      lamb: {
        slug: 'lamb-treats',
        variant: 'lamb',
        title: 'New Zealand Raw Freeze-Dried Lamb Liver Treats',
        price: '19.99',
        productId: 'onetime123lambtreats',
        sellingPlan: '1234567890',
        image: '/src/assets/images/products/green.png',
      },
    },
    supplements: {
      cod_oil: {
        slug: 'cod-oil-supplements',
        title: 'Pure Wild Icelandic Cod Liver Oil',
        price: '32.95',
        productId: 'onetime123codoil',
        image: '/src/assets/images/products/blue.png',
      },
    },
  },
}

export default data
