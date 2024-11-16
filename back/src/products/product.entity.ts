import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
})
export class Product extends Model<Product> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'Default Name'
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    defaultValue: 'Default Description'
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0
  })
  price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'Default Category'
  })
  category: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  stock: number;
}
