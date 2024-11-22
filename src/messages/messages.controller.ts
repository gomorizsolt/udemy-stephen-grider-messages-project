import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  #messagesService: MessagesService;

  constructor() {
    // TODO use DI
    this.#messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.#messagesService.findAll();
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.#messagesService.findOne(id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.#messagesService.create(body.content);
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    return this.#messagesService.delete(id);
  }
}
