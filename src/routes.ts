import { Request, Response} from 'express'
import CreateCouseService from './CreateCouseService';

export function createCourse (request: Request, response:Response){
    
    CreateCouseService.execute({
        name: "NodeJs",
        educator: "Eduardo",
        duration: 10
    });

    CreateCouseService.execute({
        name: "Reactjs",
        educator: "Julin"

    });

    return response.send();
}