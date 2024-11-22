import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    // TODO ...
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    // TODO ...
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    // TODO ...
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    // TODO ...
  }
}
