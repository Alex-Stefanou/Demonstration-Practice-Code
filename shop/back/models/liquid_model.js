const data = [
    {   id: 0,
        name: "Water",
        volume: 5,
    },
    {   id: 1,
        name: "Milk",
        volume: 2,
    }
];

module.exports = {
    get: function(id) {
        return data[id];
    },
    list: function() {
        return data;
    }
}