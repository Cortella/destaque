import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("teams")
class Team {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  shield: string;

  @Column()
  city: string;

  @Column()
  stadium?: string;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Team };
