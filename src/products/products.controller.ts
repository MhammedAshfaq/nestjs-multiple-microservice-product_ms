import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateProductReq,
  SearchProductWithIdReq,
} from 'src/helpers/interface/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @GrpcMethod('ProductService', 'createProduct')
  async createProduct(data: CreateProductReq) {
    return await this.productsService.createProduct(data);
  }

  @GrpcMethod('ProductService', 'searchProductWithId')
  async searchProductWithId(data: SearchProductWithIdReq) {
    console.log('first');
    return await this.productsService.searchProductWithId(data);
  }
}
