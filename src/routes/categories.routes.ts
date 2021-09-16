import { Router } from 'express';

import { CategoriesRespository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRespository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
