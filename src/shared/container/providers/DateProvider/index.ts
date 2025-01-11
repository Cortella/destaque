import { container } from "tsyringe";

import { IDateProvider } from "./IDateProvider";
import { DayjsDateProvider } from "./implementations/DayjsDateProvider";
import { PROVIDERS } from "@utils/utils";

container.registerSingleton<IDateProvider>(
  PROVIDERS.DATE_PROVIDER,
  DayjsDateProvider
);
