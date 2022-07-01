import { Module } from '@nestjs/common';
import { AppController } from '../../application/controllers/index';
import { AppService } from '../../domain/services/';
import { DatabaseModule } from '../../domain/modules/database/database.module';
import { TaskModule } from '../../domain/modules/task/task.module';
import { ConfigModule } from '@nestjs/config';
import * as modules from '../../domain/modules/';
// import { configuration } from '../../../config/configuration';

/**
 * application modules list
 */
const modulesList = Object.keys(modules).map(moduleIndex => modules[moduleIndex as keyof typeof modules]);

@Module({
  imports: [


    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.STAGE}`,
    }),

    DatabaseModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
