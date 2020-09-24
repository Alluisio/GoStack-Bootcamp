import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticaticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email: email } });

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
