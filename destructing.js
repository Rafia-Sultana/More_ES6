const fish = {
    id: 1020,
    name: `king hilish`,
    address: `chandpur`,
    dress: `silver`
};
// const dress = (fish.dress);
// const address = (fish.address);
// const name = (fish.name);

// shortcut way
const { dress, address, name } = fish;
console.log(dress, address, name);
let company = {
    name: 'GP',
    CEO: {
        id: 1,
        name: 'afraiyan',
        food: 'choclate',
    },
    web: {
        work: "website development",
        employee: 22,
        frramework: 'react',
        food2: 'dark-choclate',
        tech: {
            first: ` html`,
            second: `css`

        }


    }
}
let { work, frramework, food2 } = company.web;
let { food } = company.CEO;
const { second, first } = company.web.tech;
//console.log(work, frramework, food, food2, second, first);
console.log(company?.web?.tech?.second)