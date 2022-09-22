import { notification } from 'antd'

export default function toast({
  type = 'success',
  message,
  description,
}: {
  type?: 'success' | 'info' | 'warning' | 'error'
  message: string
  description?: string
}) {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottomRight',
  })
}
