import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonesModule } from './phones/phones.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PhonesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
