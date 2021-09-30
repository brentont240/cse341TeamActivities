const fs = require('fs');
const path = require('path');
// teacher's solution uses this
// const fetch = require('node-fetch');

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

  // not working solution
  // static findByTag(tag, cb) {
  //   getItemFromFile(items => {
  //   const filteredItems = items.filter(items => items.tag[0] !== tag);
  //   // const filteredItems = items.filter( (items)=>{
  //   //   // return tag.toLowerCase().indexOf(items.tag.toLowerCase()) >= 0
  //   //   return items.tag.includes(tag)
  //   // });
  //   console.log(filteredItems);
  //   cb(filteredItems);
  //   });
  // }

  //combined solution with teacher's solution
  static findByTag(searchTag, cb) {
    getItemFromFile(items => {
    const filteredItems = items.filter((items) => {
      let tagFound = false;  
      items.tags.forEach((tag) => {
        if (tag.toLowerCase().includes(searchTag)) tagFound = true;       
    });  
    return (
      tagFound ||
      items.name.toLowerCase().includes(searchTag) ||
      items.description.toLowerCase().includes(searchTag)
    );
    });
    cb(filteredItems);
  });
};

// teacher's solution
  // static search(query, cb) {
  //   fetch(productsUrl)
  //     .then((res) => res.json())
  //     .then((products) => {
  //       // search products
  //       const filteredProducts = products.filter((product) => {
  //         // search product tags
  //         let tagFound = false;
  //         product.tags.forEach((tag) => {
  //           if (tag.toLowerCase().includes(query)) tagFound = true;
  //         });

  //         return (
  //           tagFound ||
  //           product.name.toLowerCase().includes(query) ||
  //           product.description.toLowerCase().includes(query)
  //         );
  //       });

  //       cb(filteredProducts);
  //     })
  //     .catch((err) => console.log(err));
  // };

};




