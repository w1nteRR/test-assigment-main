import { SendCardDto } from "./dto/send-card.dto";

export interface IAdaptiveCardsRepository {
  sendCardToSpecificPerson(dto: SendCardDto): Promise<void>;
}
