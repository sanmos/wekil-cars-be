
/*import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "./CreateUserDTO";
import { CreateUserErrors } from "./CreateUserErrors";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { TextUtils } from "../../../../shared/utils/TextUtils";
import { DecodedExpressRequest } from "../../infra/http/models/decodedRequest";
import * as express from 'express'

export class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase;

  constructor (useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl (req: DecodedExpressRequest, res: express.Response): Promise<any> {
    let dto: CreateUserDTO = req.body as CreateUserDTO;

    dto = {
      username: TextUtils.sanitize(dto.username),
      email: TextUtils.sanitize(dto.email),
      password: dto.password
    }

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;
  
        switch (error.constructor) {
          case CreateUserErrors.UsernameTakenError:
            return this.conflict(error.errorValue().message)
          case CreateUserErrors.EmailAlreadyExistsError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(res, error.errorValue().message);
        }
        
      } else {
        return this.ok(res);
      }

    } catch (err) {
      return this.fail(res, err)
    }
  }
}*/

'use strict';

const ListUsers = require('../../application/use_cases/ListUsers');
const CreateUser = require('../../application/use_cases/CreateUser');
const GetUser = require('../../application/use_cases/GetUser');
const DeleteUser = require('../../application/use_cases/DeleteUser');

module.exports = {

  async createUser(request: { server: { app: { serviceLocator: any; }; }; payload: { firstName: any; lastName: any; email: any; password: any; }; }) {
/*
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { firstName, lastName, email, password } = request.payload;

    // Treatment
    const user = await CreateUser(firstName, lastName, email, password, serviceLocator);

    // Output
    return serviceLocator.userSerializer.serialize(user);
*/
    console.log("sam")
  },

  /*async findUsers(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const users = await ListUsers(serviceLocator);

    // Output
    return users.map(serviceLocator.userSerializer.serialize)
  },

  async getUser(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    const user = await GetUser(userId, serviceLocator);

    // Output
    if (!user) {
      return Boom.notFound();
    }
    return serviceLocator.userSerializer.serialize(user);
  },

  async deleteUser(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    await DeleteUser(userId, serviceLocator);

    // Output
    return h.response().code(204);
  },*/

};
