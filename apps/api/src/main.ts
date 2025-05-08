import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { LoggingMiddleware } from './logs/logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prisma = app.get(PrismaService);
  const logger = new LoggingMiddleware(prisma);

  //미들웨어 적용
  app.use(logger.use.bind(logger));

  await app.listen(3001);
}
bootstrap();
