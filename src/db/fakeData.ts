import * as image from './images';



export const products = [
    {
        id: '1',
        category: ['jacket'],
        title: 'Denim Jacket',
        short: 'Ripped Faded Wash Stitch Detail',
        price: 199.99,
        salePrice: null,
        colors: ['#ea366b', '#66c69d'],
        sizes: ['s', 'm', 'l'],
        images: [
            image.product1,
            image.product2
        ]
    },
    {
        id: '2',
        category: ['top', 'trousers'],
        title: 'Floral top and trousers',
        short: 'The second you pick up our Levis® XX Chino. It’s the quality you’d expect from the brand that invented blue jeans. But these aren’t denim. And dont call them khakis, either.',
        price: 81.99,
        salePrice: null,
        colors: ['orange', '#fff', '#5b5b5b'],
        sizes: ['s', 'm', 'l', 'xl'],
        images: [
            image.product2,
            image.product1,
            image.product3
        ]
    },
    {
        id: '3',
        category: ['dress'],
        title: 'Floral top and trousers',
        short: 'Levis Original Trousers in a classic staple',
        price: 129.99,
        salePrice: null,
        colors: ['#5b5b5b'],
        sizes: ['xs', 's'],
        images: [
            image.product3,
            image.product1
        ]
    },
    {
        id: '4',
        category: ['dress'],
        title: 'Green floral dress',
        short: 'Levis Original Trousers in a classic staple',
        price: 189.99,
        salePrice: null,
        colors: ['#13820f','#5b5b5b'],
        sizes: ['xs', 's','m'],
        images: [
            image.product4,
            image.product4_1
        ]
    },
    {
        id: '5',
        category: ['dress','hat'],
        title: 'Polka dot dress and white hat',
        short: 'Levis Original Trousers in a classic staple',
        price: 219.99,
        salePrice: null,
        colors: ['#ae2229','#5b5b5b'],
        sizes: ['xs', 's','m','l'],
        images: [
            image.product5,
        ]
    },
    {
        id: '6',
        category: ['dress'],
        title: 'Beautiful white wedding dress',
        short: 'Levis Original Trousers in a classic staple',
        price: 519.99,
        salePrice: null,
        colors: ['#ffffff'],
        sizes: ['xs', 's','m','l'],
        images: [
            image.product6,
        ]
    }
]