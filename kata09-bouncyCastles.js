const PI = 3.14159;

const sphereVolume = function({radius}) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};
console.log(4186 < sphereVolume({radius: 10}) && sphereVolume({radius: 10}) < 4189);

const coneVolume = function({radius, height}) {
  return PI * Math.pow(radius, 2) * (height / 3);
};

console.log(45 < coneVolume({radius: 3, height: 5}) && coneVolume({radius: 3, height: 5}) < 49);

const prismVolume = function({height, width, depth}) {
  return  height * width * depth;
};

console.log(prismVolume({height: 3, width: 4, depth: 5}) === 60);

const lookup = {
  'sphere': sphereVolume,
  'cone': coneVolume,
  'prism': prismVolume
};

const totalVolume = function(solids) {
  let volume = 0;

  solids.map(solid => {
    const properties = Object.keys(solid).filter(key => key !== 'type');
    let params = {};
    properties.forEach((property) => {
      params[property] = solid[property];
    });
    console.log(params);
    // console.log(lookup[solid.type]);
    volume += lookup[solid.type](params);
  });
  return volume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// console.log(sphereVolume(cone.radius));