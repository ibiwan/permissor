const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import groupModelName from './group';

export const userModelName = 'User';

const userSchema = new Schema({
    name: String,
    instance_of: {
        type: Schema.Types.ObjectId,
        ref: groupModelName,
    },
    subordinate_to: [
        {
            type: Schema.Types.ObjectId,
            ref: userModelName,
        }
    ],
    authority: {
        type: Schema.Types.ObjectId,
        ref: 'Authority',
    },
    permissions: [
        {
            permission: {
                type: Schema.Types.ObjectId,
                ref: 'Permission'
            },
            override_value: {
                type: Schema.Types.Boolean,
                required: true
            },
            override_authority_to_permit: {
                type: Schema.Types.ObjectId,
                ref: 'Authority',
                required: false
            },
            override_authority_to_permit: {
                type: Schema.Types.ObjectId,
                ref: 'Authority',
                required: false
            },
        },
    ],
});

export const UserModel = mongoose.model(userModelName, userSchema);
