const Item = require('../models/items');

/*
router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
      title: 'Team Activity 02',
      path: '/ta02', // For pug, EJS
      users: names
    });
  });
*/

exports.getItems = (req, res, next) => {
  Item.fetchAll(items => {
    res.render('pages/ta03', {
      items: items,
      pageTitle: 'All Items',
      page: req.url,
      path: 'ta03'
      // path: '/items'
    });
  });
};

exports.getItemsFiltered = (req, res, next) => {
    const itemTag = req.body.search;
    Item.findByTag(itemTag, items => {
      res.render('pages/ta03', {
        items: items, 
        pageTitle: items.title,
        page: req.url, //to see if they searched or not
        path: 'ta03'
        // path: '/getItems'
      });
    });
  };


// exports.getItem = (req, res, next) => {
//   const itemTag = req.params.itemTag;
//   item.findByTag(itemTag, item => {
//     res.render('shop/item-detail', {
//       item: item,
//       pageTitle: item.title,
//       path: '/items'
//     });
//   });
// };

