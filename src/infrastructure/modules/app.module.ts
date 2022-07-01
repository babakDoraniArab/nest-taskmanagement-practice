import { Module } from '@nestjs/common';
import { AppController } from '../../application/controllers/';
import { AppService } from '../../domain/services/';
import { DatabaseModule } from '../../domain/modules/database/database.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [DatabaseModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
