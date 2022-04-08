import { container } from 'tsyringe';
import { IMailProvider } from './IMailProvider';
import { EtherealMailProvider } from './implementation/EtherealMailProvider';

container.registerSingleton<IMailProvider>(
  'EtherealMailProvider',
  EtherealMailProvider,
);
