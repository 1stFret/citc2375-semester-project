const items = [
  {
    id: 1,
    name: "Lambeau Field",
    category: "Outdoor",
    description: "Home of the Green Bay Packers, known for its cold weather and rich history.",
    capacity: 81441,
    roofType: "Open"
  },

  {
    id: 2,
    name: "AT&T Stadium",
    category: "Indoor/Outdoor",
    description: "Home of the Dallas Cowboys, featuring a massive centerpiece HD video display.",
    capacity: 80000,
    roofType: "Retractable Roof"
  },
  
  {
    id: 3,
    name: "SoFi Stadium",
    category: "Indoor/Outdoor",
    description: "Home of the LA Rams and Chargers, equipped with a translucent fixed canopy.",
    capacity: 70240,
    roofType: "Canopy"
  },
  
  {
    id: 4,
    name: "U.S. Bank Stadium",
    category: "Indoor",
    description: "Home of the Minnesota Vikings, featuring a fixed transparent roof and glass walls.",
    capacity: 66860,
    roofType: "Fixed Dome"
  },
  
  {
    id: 5,
    name: "Arrowhead Stadium",
    category: "Outdoor",
    description: "Home of the Kansas City Chiefs, famous for holding peak crowd noise records.",
    capacity: 76416,
    roofType: "Open"
  },
  
  {
    id: 6,
    name: "Mercedes-Benz Stadium",
    category: "Indoor/Outdoor",
    description: "Home of the Atlanta Falcons, featuring a pinwheel retractable roof mechanism.",
    capacity: 71000,
    roofType: "Retractable Roof"
  }
];

function getItemById(id) {
  return items.find(item => item.id === id);
}

function getStadiumsByCapacity(inputCapacity, operator = '<') {
  return items.filter(item => {
    switch (operator) {
      case '<':
        return item.capacity < inputCapacity;
      case '>':
        return item.capacity > inputCapacity;
      case '=':
      case '===':
        return item.capacity === inputCapacity;
      case '<=':
        return item.capacity <= inputCapacity;
      case '>=':
        return item.capacity >= inputCapacity;
      default:
        return false;
    }
  });
}

function getAverageCapacity() {
  const totalCapacity = items.reduce((sum, item) => sum + item.capacity, 0);
  return Math.round(totalCapacity / items.length);
}

const jsonString = JSON.stringify(items);
const parsedItems = JSON.parse(jsonString);

console.log("Parsed First Item Name:", parsedItems[0].name);