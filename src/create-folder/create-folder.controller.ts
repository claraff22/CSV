import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFolderService } from './create-folder.service';

@Controller('create-folder')
export class CreateFolderController {
    constructor(private readonly createFolderService: CreateFolderService) {}
    

  @Get()
    getContent() {
      return this.createFolderService.getContent();
    }

   @Put()
    createFolder(@Body() body) {
    return this.createFolderService.createFolder(body);
  }
}
