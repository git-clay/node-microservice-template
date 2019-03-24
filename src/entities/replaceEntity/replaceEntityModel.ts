import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';

mongoose.pluralize(null);

const databaseSchema = new Schema({
  field: String
}, {
  timestamps: true
});

const replaceEntityModel = model('replaceEntity', databaseSchema);

export default replaceEntityModel;
