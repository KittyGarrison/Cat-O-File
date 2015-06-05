'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Cat Schema
 */
var CatSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill in Cat name',
		trim: true
	},
	image: {
		type: String,
		default: '',
		trim: false
	},
	color: {
		type: String,
		default: '',
		required: 'Please fill in Cat color',
		trim: true
	},
	birthday: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Cat', CatSchema);