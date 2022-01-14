import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car Description',
      daily_rate: 110.0,
      license_plate: 'rBC-1253',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'categori_id',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car Description',
      daily_rate: 110.0,
      license_plate: 'rBC-1253',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'categori_id',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Car_brand_test',
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
