const dollars = process.argv.slice(2);

const inventory = {
  emptyBottles: 0,
  caps: 0
};

const tradePrices = {
  emptyBottle: 2,
  cap: 4
};

const redemtions = {
  money: 0,
  caps: 0,
  bottles: 0
};


const popCalculator = (dollars) => {
  // new pop bottles from purchase
  const newBottles = Math.floor(dollars / 2);
  redemtions.money += newBottles;

  recylce(newBottles);
  print();
};


const recylce = (pops) => {
  if (pops < 1) return;

  inventory.caps += pops;
  inventory.emptyBottles += pops;


  let capPops = 0;
  let bottlePops = 0;
  if (inventory.caps >= tradePrices.cap) {

    capPops = trade(inventory.caps, tradePrices.cap);
    inventory.caps -= capPops * tradePrices.cap;
    redemtions.caps += capPops;
  }

  if (inventory.emptyBottles >= tradePrices.emptyBottle) {

    bottlePops = trade(inventory.emptyBottles, tradePrices.emptyBottle);
    inventory.emptyBottles -= bottlePops * tradePrices.emptyBottle;
    redemtions.bottles += bottlePops;
  }
    
  console.log(`newPops;  ${redemtions.caps + redemtions.money + redemtions.bottles} + ${capPops + bottlePops}`);
  console.log(redemtions);
  return recylce(capPops + bottlePops);
};


const trade = (inventory, rate) => {
  const tradePops = Math.floor(inventory / rate);
  return tradePops;
};

const print = () => {
  const output = `Total Bottles: ${redemtions.money + redemtions.bottles + redemtions.caps}
  Remaining Bottles: ${inventory.emptyBottles}
  Remaining Caps: ${inventory.caps}
  Total Earned:
    Bottles: ${redemtions.bottles}
    Caps: ${redemtions.caps}`;

  console.log(output);
};

popCalculator(dollars);

