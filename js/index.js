// javascript Object Notation
// JSON
const user = { id: 11, name: 'Gorib Amir', job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranvir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia bhat',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);   //string er moto hoye ja ... kno property use kora jay na.
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);  // string ke object akar r dey .. fole er property use kora jay.
console.log(converted);
