
type ProductType={
    title: string,
    price: number,
    image: string,
};
let products: ProductType[]=[
    {
        title: 'milk',
        price: 22,
        image: 'https://www.oldenburger-dairy.com/media/00/6c/e1/1737642194/11067_1l_3_5_410x410_full_cream_milk.png'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIxoCapHrG_etlB9A1fuGX9fAZZJUg_Zr2g&s'
    },
];

for (const product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price – ${product.price}</h3>
            <img src="${product.image}" alt="" class="product-image">
        </div>
    `);
}
