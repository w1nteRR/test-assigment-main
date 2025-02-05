import { BotBuilderCloudAdapter } from "@microsoft/teamsfx";
import * as ACData from "adaptivecards-templating";
import notificationTemplate from "../../../adaptiveCards/notification-default.json";

import { SendCardDto } from "../../domain/repositories/dto/send-card.dto";
import { IAdaptiveCardsRepository } from "../../domain/repositories/adaptive-cards.repository";

export class AdaptiveCardsRepository implements IAdaptiveCardsRepository {
  constructor(readonly app: BotBuilderCloudAdapter.ConversationBot) {}

  async sendCardToSpecificPerson(dto: SendCardDto): Promise<void> {
    const member = await this.app.notification.findMember((member) =>
      Promise.resolve(member.account.id === dto.message.user_id)
    );

    await member.sendAdaptiveCard(
      new ACData.Template(notificationTemplate).expand({
        $root: {
          ...dto.card_props,
          appName: dto.card_props.app_name,
          description: dto.message.text,
        },
      })
    );
  }
}
