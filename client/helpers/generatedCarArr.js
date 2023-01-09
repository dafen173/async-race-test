const carBrands = [
  'Saab',
  'Skoda',
  'Audi',
  'Hyundai',
  'Ford',
  'Volkswagen',
  'Ferrari',
  'BMW',
  'Mazda',
  'Toyota',
];
const carModels = [
  'Carrera',
  'Targa',
  'Turbo',
  'Boxster',
  'Cayenne',
  'Cayman',
  'Macan',
  'Panamera',
  'Integra',
  'Legend',
];

const randomCarName = () => {
  const carBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const carModel = carModels[Math.floor(Math.random() * carModels.length)];
  // console.log(carBrand, carModel);
  return `${carBrand} ${carModel}`;
};

const hexSymbols = '0123456789ABCDEF';
const randomCarColor = () => {
  let carColor = '#';
  for (let i = 0; i < 6; i += 1) {
    carColor += hexSymbols[Math.floor(Math.random() * 16)];
  }
  // console.log(carColor);
  return carColor;
};

const generateCars = (carCount = 100) => new Array(carCount)
  .fill('yoooo')
  .map(() => ({ name: randomCarName(), color: randomCarColor() }));

export const generatedCarArr = generateCars();

export default generatedCarArr;
