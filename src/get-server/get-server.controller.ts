import { Controller, Get } from '@nestjs/common';
import { GetServerService } from './get-server.service';

@Controller('get-server')
export class GetServerController {
    constructor(private readonly getServerService: GetServerService) {}

    @Get()
    getServer() {
        return this.getServerService.getServer();
    }
}
