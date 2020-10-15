import { ValidationError } from 'yup';

interface Erros {
 [key: string]: string;

}

export default function getValidatonErros(err: ValidationError): Erros{
  const validationErrors: Erros = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
