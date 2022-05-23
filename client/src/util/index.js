function Item (value) {
  this.value = value;
};

const parseList = (str) => {
  var items = [];
  var lines = str.split('\n');

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length > 0) {
      var item = new Item(lines[i]);
      items.push([item]);
    }
  }

  return items;
};

export { parseList };