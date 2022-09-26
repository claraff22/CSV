import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CreateFolderController } from './create-folder.controller';
import { CreateFolderService } from './create-folder.service';

@Module({
    imports: [HttpModule],
    controllers: [CreateFolderController],
    providers: [CreateFolderService],
})
export class CreateFolderModule {}
