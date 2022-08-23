import { Body, Controller, Param, Put } from '@nestjs/common';
import { CreateFolderService } from './create-folder.service';

@Controller('create-folder')
export class CreateFolderController {
    constructor(private readonly createFolderService: CreateFolderService) {}

    @Put(':id')
    createFolder(@Param('id') id: string, @Body() body) {
    return this.createFolderService.createFolder(body);
  }
}
