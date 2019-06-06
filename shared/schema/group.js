const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const groupModelName = 'Group';

const groupSchema = new Schema({
    name: String,
    instance_of: {
        type: Schema.Types.ObjectId,
        ref: groupModelName,
    },
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

export const GroupModel = mongoose.model(groupModelName, groupSchema);
