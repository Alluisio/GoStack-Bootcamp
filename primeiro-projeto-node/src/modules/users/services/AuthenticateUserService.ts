import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

import IUsersRepository from '../repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticaticateUserService {
  constructor(private usersRepository : IUsersRepository){}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    // user.password -- Senha criptografada
    // password -- Senha não criptografada

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    //payload // chave-secreta-para-criptografia // configurações do token
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    //Usuário autenticado

    return {
      user,
      token,
    };
  }
}

export default AuthenticaticateUserService;
