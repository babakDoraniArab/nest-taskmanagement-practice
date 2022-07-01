import { Module } from '@nestjs/common';
import { AppController } from '../../application/controllers/index';
import { AppService } from '../../domain/services/';
import { DatabaseModule } from '../../domain/modules/database/database.module';
import { TaskModule } from '../../domain/modules/task/task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, TaskModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
