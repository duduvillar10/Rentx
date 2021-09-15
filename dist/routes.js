"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCouseService_1 = __importDefault(require("./CreateCouseService"));
function createCourse(request, response) {
    CreateCouseService_1.default.execute({
        name: "NodeJs",
        educator: "Eduardo",
        duration: 10
    });
    CreateCouseService_1.default.execute({
        name: "Reactjs",
        educator: "Julin"
    });
    return response.send();
}
exports.createCourse = createCourse;
