import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  // OneToMany,
  Column,
  // JoinTable,
  // ManyToMany,
  OneToMany,
} from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customer_id: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  // @ManyToMany(() => OrdersProducts, { cascade: true })
  // @ManyToMany(() => OrdersProducts, ordersProducts => ordersProducts.order_id)
  // @JoinTable({ name: 'orders_products' })
  @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.order, {
    cascade: true,
  })
  // @JoinColumn({ name: 'id', referencedColumnName: 'order_id' })
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
