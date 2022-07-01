import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {

  

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const NODE_PORT = configService.get('NODE_PORT');
  await app.listen(NODE_PORT);

  console.log('here', );
  console.log('here NODE_PORT', NODE_PORT);
}
bootstrap();
