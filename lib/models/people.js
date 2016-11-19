import ORM from './orm';

var PeopleModel = ORM.Model.extend({
    tableName: 'people'
});

export default PeopleModel;

export { PeopleModel };
