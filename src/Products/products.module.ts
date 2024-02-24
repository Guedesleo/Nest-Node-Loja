import { Module } from '@nestjs/common';
import { ProductsController } from './products.controler';
import { ProductsRepository } from './products.respository';
import { UsersModule } from 'src/Users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ProductsController],
  providers: [ProductsRepository],
})
export class ProductsModule {}
