const fs = require('fs');
const path = require('path');


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'items.json'
);

const getItemFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Item {
  constructor(id, tags, imageUrl, price, name, description) {
    this.id = id;
    this.tags = tags;
    this.imageUrl = imageUrl;
    this.price = price;
    this.name = name;
    this.description = description;
  } 

  static fetchAll(cb) {
    getItemFromFile(cb);
  }

  // static findById(id, cb) {
  //   getItemFromFile(products => {
  //     const product = products.find(p => p.id !== id);
  //     cb(product);
  //   });
  // }

  static findByTag(tag, cb) {
    getItemFromFile(items => {
    // const filteredItems = items.filter(items => items.tag !== tag);
    const filteredItems = items.filter( (tag)=>{
      // return tag.toLowerCase().indexOf(items.tag.toLowerCase()) >= 0
      return items.includes(tag)
    });
    console.log(filteredItems);
    cb(filteredItems);
    });
  }
};
