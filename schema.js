const mongoose = require('mongoose');

// mongodb shell: mongo ds215502.mlab.com:15502/avero -u malcolm -p Vargo65
const businessSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    hours: [Number],
    updated_at: Date,
    created_at: Date
});

const menuItemSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    business_id: {
        type: String,
        index: true
    },
    name: String,
    cost: Number,
    price: Number,
    updated_at: Date,
    created_at: Date
});

const checkSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    business_id: {
        type: String,
        index: true
    },
    employee_id: {
        type: String,
        index: true
    },
    name: String,
    closed: Boolean,
    closed_at: {
        type: Date,
        index: true
    },
    updated_at: Date,
    created_at: Date
});

const orderedItemSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    business_id: {
        type: String,
        index: true
    },
    employee_id: {
        type: String,
        index: true
    },
    check_id:  {
        type: String,
        index: true
    },
    item_id: {
        type: String,
        index: true
    },
    name: String,
    cost: Number,
    price: Number,
    voided: Boolean,
    updated_at: Date,
    created_at: Date
});

const employeeSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    business_id: {
        type: String,
        index: true
    },
    first_name: String,
    last_name: String,
    pay_rate: Number,
    updated_at: Date,
    created_at: Date
});

const laborEntrySchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    business_id: {
        type: String,
        index: true
    },
    employee_id:  {
        type: String,
        index: true
    },
    name: String,
    clock_in: {
        type: Date,
        index: true
    },
    clock_out: {
        type: Date,
        Index: true
    },
    pay_rate: Number,
    updated_at: Date,
    created_at: Date
});

const querySchema = new mongoose.Schema({
    model: String,
    business_id: { type: String, default: null }
});

const Query = mongoose.model('Query', querySchema);
const Business = mongoose.model('Business', businessSchema);
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
const Check = mongoose.model('Check', checkSchema);
const Employee = mongoose.model('Employee', employeeSchema);
const LaborEntry = mongoose.model('LaborEntry', laborEntrySchema);
const OrderedItem = mongoose.model('OrderedItem', orderedItemSchema);

module.exports = {
    Business,
    MenuItem,
    Check,
    Employee,
    LaborEntry,
    OrderedItem,
    Query
};
