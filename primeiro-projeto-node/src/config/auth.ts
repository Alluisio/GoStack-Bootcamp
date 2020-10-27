import { Secret } from 'jsonwebtoken';

interface ISecret {
  jwt: {
    secret: Secret;
    expiresIn: string;
  };
}

const secret = process.env.APP_SECRET;

export default <ISecret>{
  jwt: {
    secret,
    expiresIn: '1d',
  },
};
