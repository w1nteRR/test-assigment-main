import { AdaptiveCardsRepository } from "../../infrastructure/repositories/messages.repository";

import { SendCardDto } from "../repositories/dto/send-card.dto";

export class SendNotificationSpecificPersonUseCase {
  constructor(private adaptiveCardsRepository: AdaptiveCardsRepository) {}

  public async execute(dto: SendCardDto): Promise<void> {
    await this.adaptiveCardsRepository.sendCardToSpecificPerson(dto);
  }
}
