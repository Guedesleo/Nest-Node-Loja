import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, 
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
    useClass: PostgresConfigService,
    inject: [PostgresConfigService],
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
