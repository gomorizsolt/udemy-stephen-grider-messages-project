import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    // TODO ...
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    // TODO ...
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    // TODO ...
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    // TODO ...
  }
}
