import { CardProps } from "../../entities/card-props.entity";
import { Message } from "../../entities/message.entity";

export class SendCardDto {
  constructor(readonly message: Message, readonly card_props: CardProps) {}
}
