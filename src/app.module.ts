import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MoviesModule } from './theaters/movies/movies.module';
import { MoviesModule } from './movies/movies.module';
import { TheatersModule } from './theaters/theaters.module';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { MoviesModule } from './reservations/movies/movies.module';
import { AdminModule } from './admin/admin.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [AuthModule, UserModule, MoviesModule, TheatersModule, ShowtimesModule, AdminModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
