import faker from 'faker';

const generateNewPeople = () => {
    return {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone: faker.random.number(8),
        address: faker.address.city(),
        current_job: 'Sales'
    };
};

export { generateNewPeople };
