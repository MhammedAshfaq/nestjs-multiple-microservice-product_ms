import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const microServiceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'products',
    url: process.env.PRODUCTS_URL,
    protoPath: join(process.cwd(), 'src/helpers/proto/product.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microServiceOptions,
  );
  await app.listen();
  console.log('Product Micro Service Running');
}
bootstrap();
