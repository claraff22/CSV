import { Body, Controller, Put } from '@nestjs/common';
import { CreateFolderService } from './create-folder.service';

@Controller('create-folder')
export class CreateFolderController {
    constructor(private readonly createFolderService: CreateFolderService) {}
  
   @Put()
    createFolder(@Body() body) {
    return this.createFolderService.createFolder(body);
  }
}
