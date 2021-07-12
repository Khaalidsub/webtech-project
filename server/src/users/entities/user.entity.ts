
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;

    @Column({})
    lastName: string;
    
    @Column({})
    email: string;
  

    @Column({ type:'datetime', nullable:true})
    created_at: Date;

//     @ManyToOne(() => Room, (room) => room.messages, {
//         onDelete: 'CASCADE',
//         eager:true
//       })
//       room: Room;
}
