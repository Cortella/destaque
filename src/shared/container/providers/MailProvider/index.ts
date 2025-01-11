import { container } from "tsyringe";

import { IMailProvider } from "./IMailProvider";
import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { PROVIDERS } from "@utils/utils";

container.registerSingleton<IMailProvider>(
  PROVIDERS.MAIL_PROVIDER,
  EtherealMailProvider
);