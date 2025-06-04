import { Column, CreateDateColumn, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    title: string;

    @Column('text', { nullable: true })
    description?: string;

    @Column({ name: 'duration_minutes', type: 'int' })
    durationMinutes: number;

    @Column({ length: 100, nullable: true })
    genre?: string;

    @Column({ length: 10, nullable: true })
    rating?: string;

    @Column({ length: 50, nullable: true })
    language?: string;

    @Column({ name: 'release_date', type: 'date', nullable: true })
    releaseDate?: Date;

    @Column({ name: 'poster_url', length: 500, nullable: true })
    posterUrl?: string;

    @Column({ name: 'trailer_url', length: 500, nullable: true })
    trailerUrl?: string;

    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
}
