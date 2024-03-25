import { Module } from '@nestjs/common';
import { ProductsController } from './products.controler';
import { ProductsRepository } from './products.respository';
import {  ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  controllers: [ProductsController],
  providers: [ProductsRepository, ProductsService],
})
export class ProductsModule {}
