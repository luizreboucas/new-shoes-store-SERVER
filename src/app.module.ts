import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Users/user.module';
import { ProductModule } from './Product/product.module';
import { PurchaseModule } from './Purchase/purchase.module';

@Module({
  imports: [UserModule, ProductModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
