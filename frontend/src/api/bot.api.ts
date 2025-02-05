import { BASE_URL, MOCK_USER_ID } from '../constants/api.constants'
import { INotificationPayload } from '../types/notifications/notification.types'

export const botApi = {
  async sendNotification(notification: INotificationPayload): Promise<void> {
    const res = await fetch(`${BASE_URL}/notification`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ ...notification, user_id: MOCK_USER_ID }),
    })
    return res.json()
  },
}
