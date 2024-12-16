import { TounamentType } from "../../../dtos/ICreateTournamentsDTO";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tounaments")
class Tounament {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  initialDate: Date;

  @Column()
  finalDate: Date;

  @Column({ type: "varchar", length: 50 })
  type: TounamentType;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Tounament };
