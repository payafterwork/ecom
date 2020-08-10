//To handle image upload we use formidable package
const formidable = require('formidable');
const _ = require('lodash'); // for certain functions we may use
const fs = require('fs'); //File system
const Product = require('../models/product');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
    
        let product = new Product(fields);

        if (files.photo) { //if files coming from form has phoyo
            //then in Product Model for photo field we fill up data & contentType fields
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if (err) {
                console.log('PRODUCT CREATE ERROR ', err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};