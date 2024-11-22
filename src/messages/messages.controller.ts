import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    // TODO ...
  }

  @Get('/:id')
  findOne() {
    // TODO ...
  }

  @Post()
  create() {
    // TODO ...
  }

  @Delete('/:id')
  delete() {
    // TODO ...
  }
}
