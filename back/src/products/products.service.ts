import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    await this.productModel.update(product, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.productModel.destroy({ where: { id } });
    return result > 0;
  }
}
