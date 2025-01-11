import { container } from "tsyringe";
import "@shared/container/providers/DateProvider";
import "@shared/container/providers/MailProvider";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/users/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/users/repositories/IUsersTokensrepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { TeamsRepository } from "@modules/teams/infra/typeorm/repositories/TeamsRepository";
import { ITournamentRepository } from "@modules/tournaments/repositories/ITournamentRepository";
import { TournamentRepository } from "@modules/tournaments/infra/typeorm/repositories/TournamentRepository";
import { IGamesRepository } from "@modules/games/repositories/IGamesRepository";
import { GamesRepository } from "@modules/games/infra/typeorm/repositories/GamesRepository";
import { IPlayersRepository } from "@modules/players/repositories/IPlayersRepository";
import { PlayersRepository } from "@modules/players/infra/typeorm/repositories/PlayerRepository";
import { PredictionRepository } from "@modules/players/infra/typeorm/repositories/PredictionsRepository";
import { IPredictionRepository } from "@modules/players/repositories/IPredictionsRepository";
import { ILeagueRepository } from "@modules/league/repositories/ILeagueRepository";
import { LeagueRepository } from "@modules/league/infra/typeorm/repositories/LeagueRepository";
import { REPOSITORIES } from "@utils/utils";

container.registerSingleton<IUsersRepository>(
  REPOSITORIES.USERS_REPOSITORY,
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  REPOSITORIES.USERS_TOKENS_REPOSITORY,
  UsersTokensRepository
);

container.registerSingleton<ITeamsRepository>(
  REPOSITORIES.TEAMS_REPOSITORY,
  TeamsRepository
);

container.registerSingleton<ITournamentRepository>(
  REPOSITORIES.TOURNAMENTS_REPOSITORY,
  TournamentRepository
);

container.registerSingleton<IGamesRepository>(
  REPOSITORIES.GAMES_REPOSITORY,
  GamesRepository
);

container.registerSingleton<IPlayersRepository>(
  REPOSITORIES.PALYERS_REPOSITORY,
  PlayersRepository
);

container.registerSingleton<IPredictionRepository>(
  REPOSITORIES.PREDICTIONS_REPOSITORY,
  PredictionRepository
);

container.registerSingleton<ILeagueRepository>(
  REPOSITORIES.LEAGUE_REPOSITORY,
  LeagueRepository
);
