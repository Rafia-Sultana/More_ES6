const myObject = {
    x: 2,
    y: 4,
    z: 60
};
const { x, z } = myObject;
//console.log(x, z);

//destructuring array 
const [m, n] = ['rafia', 36];
//console.log(m, n);

// const object = {
//     sky: 'indigo',
//     soil: 'khaki',
//     water: 'blue'
// };
const { sky, water } = {
    sky: 'indigo',
    soil: 'khaki',
    water: 'blue'
}
console.log(sky, water);