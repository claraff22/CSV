import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { GetServerController } from './get-server.controller';
import { GetServerService } from './get-server.service';

@Module({
  imports: [HttpModule],
  controllers: [GetServerController],
  providers: [GetServerService],
})
export class GetServerModule {}
