const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const permissionModelName = 'Permission';

const permissionSchema = new Schema({
    name      : String,
    operations: [
        {
            operation: {
                type: Schema.Types.ObjectId,
                ref : 'Operation',
            },
            invert_sense: {
                type    : Schema.Types.Boolean,
                required: true,
                default : false,
            },
        }
    ],
    authority_to_permit: {
        type    : Schema.Types.ObjectId,
        ref     : 'Authority',
        required: true,
    },
    authority_to_permit: {
        type    : Schema.Types.ObjectId,
        ref     : 'Authority',
        required: true,
    },
});

const PermissionModel = mongoose.model(permissionModelName, permissionSchema);

module.exports = { permissionModelName, PermissionModel };