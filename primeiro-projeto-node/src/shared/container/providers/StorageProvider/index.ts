import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';

import DiskStorageProvaider from './implementations/DiskStorageProvaider';

const providers = {
  disk: DiskStorageProvaider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
