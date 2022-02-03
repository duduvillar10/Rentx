import { CarImage } from '../infra/typeorm/entities/CarImage';

interface ICarsImagesRepository {
  findById(car_id: string): Promise<CarImage[]>;
  create(car_id: string, image_name: string): Promise<CarImage>;
  deleteAll(car_id: string): Promise<void>;
}

export { ICarsImagesRepository };
