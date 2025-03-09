import { Injectable, OnModuleInit } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/helpers/entity/product.entity';
import {
  CreateProductReq,
  SearchProductWithIdReq,
} from 'src/helpers/interface/product.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  onModuleInit() {
    // throw new Error('Method not implemented.');
  }

  async createProduct(data: CreateProductReq) {
    return await this.productRepository.save(data);
  }

  async searchProductWithId(data: SearchProductWithIdReq) {
    console.log('________');
    try {
      const findProduct = await this.productRepository.findOne({
        where: { id: data.id },
      });
      return findProduct;
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      if (error.code == '22P02') {
        throw new RpcException('Product not found');
        // return {
        //   status: 404,
        //   error: 'Product not found',
        // };
      }
      return {
        status: 500,
        error: error.message,
      };
    }
  }
}
