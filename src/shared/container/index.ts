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
  "TournamentsRepository",
  TournamentRepository
);

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
);

container.registerSingleton<IPlayersRepository>(
  "PlayersRepository",
  PlayersRepository
);

container.registerSingleton<IPredictionRepository>(
  "PredictionsRepository",
  PredictionRepository
);

container.registerSingleton<ILeagueRepository>(
  "LeagueRepository",
  LeagueRepository
);
