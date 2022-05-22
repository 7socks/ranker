function Item (value) {
  this.value = value;
};

const parseList = (str) => {
  var items = [];
  var lines = str.split('\n');

  console.log(lines);
  for (var i = 0; i < lines.length; i++) {
    var item = new Item(lines[i]);
    items.push([item]);
  }

  return items;
};

export { parseList };