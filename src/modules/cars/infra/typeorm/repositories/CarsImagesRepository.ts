import { getRepository, Repository } from 'typeorm';

import { ICarsImagesRepository } from '../../../repositories/ICarsImagesRepository';
import { CarImage } from '../entities/CarImage';

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async deleteAll(car_id: string): Promise<void> {
    this.repository.delete({ car_id });
  }

  async findById(car_id: string): Promise<CarImage[]> {
    const carImage = await this.repository.find({ car_id });
    return carImage;
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
}

export { CarsImagesRepository };
