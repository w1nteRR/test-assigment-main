import { Request, Response } from "express";
import { SendNotificationSpecificPersonUseCase } from "../../domain/usecases/send-notification-specific-person.usecase";
import { Message } from "../../domain/entities/message.entity";

export class SendNotificationSpecificPersonController {
  constructor(
    private readonly sendNotificationSpecificPersonUseCase: SendNotificationSpecificPersonUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<void> {
    const body = req.body;

    try {
      const message: Message = {
        text: body.text,
        user_id: body.user_id,
      };

      await this.sendNotificationSpecificPersonUseCase.execute({
        message,
        card_props: {
          title: "My Custom Card",
          app_name: "This is my app name",
        },
      });

      res.status(200).send("Notification sent");
    } catch (error) {
      if (error instanceof Error) {
        console.log("ERROR_NOTIFICATION_SEND", error);
        res.status(404).send(error.message);
      }
    }
  }
}
