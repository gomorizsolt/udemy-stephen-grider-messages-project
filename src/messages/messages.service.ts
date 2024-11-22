import { MessagesRepository } from './messages.repository';

export class MessagesService {
  #messagesRepo: MessagesRepository;

  constructor() {
    // TODO temporary, replace with dependency injection (DI)
    this.#messagesRepo = new MessagesRepository();
  }

  findAll() {
    return this.#messagesRepo.findAll();
  }

  findOne(id: string) {
    return this.#messagesRepo.findOne(id);
  }

  create(message: string) {
    return this.#messagesRepo.create(message);
  }

  delete(id: string) {
    return this.#messagesRepo.delete(id);
  }
}
