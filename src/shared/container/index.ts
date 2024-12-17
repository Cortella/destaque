import { container } from "tsyringe";

import "@shared/container/providers/DateProvider";
import "@shared/container/providers/MailProvider";

import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/users/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/users/repositories/IUsersTokensrepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { TeamsRepository } from "@modules/teams/infra/typeorm/repositories/TeamsRepository";
import { ITournamentRepository } from "@modules/tournaments/repositories/ITounamentRepository";
import { TounamentRepository } from "@modules/tournaments/infra/typeorm/repositories/TounamentRepository";



container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<ITeamsRepository>(
  "TeamsRepository",
  TeamsRepository
);

container.registerSingleton<ITournamentRepository>(
  "TounamentsRepository",
  TounamentRepository
);