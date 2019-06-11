const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

require('./access');

UserModel = require('../../shared/data/schema/user').UserModel;
GroupModel = require('../../shared/data/schema/group').GroupModel;
PermissionModel = require('../../shared/data/schema/permission').PermissionModel;

const initTestData = () => {
    const fixtures = yaml.safeLoad(
        fs.readFileSync(
            path.resolve(__dirname, './fixtures/sampledata.yml'),
            'utf8'
        )
    );

    return fixtures;

    return 'purple';
};

module.exports = {
    initTestData
};