import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
