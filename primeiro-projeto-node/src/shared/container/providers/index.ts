import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvaider from './StorageProvider/implementations/DiskStorageProvaider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvaider,
);
