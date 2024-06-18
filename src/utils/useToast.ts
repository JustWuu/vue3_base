import { app } from '@/main'

const lifeTime = 3000

export function success(body: string): void {
  app.config.globalProperties.$toast.add({
    severity: 'success',
    summary: 'Success Message',
    detail: body,
    life: lifeTime
  })
}

export function info(body: string): void {
  app.config.globalProperties.$toast.add({
    severity: 'info',
    summary: 'Info Message',
    detail: body,
    life: lifeTime
  })
}

export function warn(body: string): void {
  app.config.globalProperties.$toast.add({
    severity: 'warn',
    summary: 'Warn Message',
    detail: body,
    life: lifeTime
  })
}

export function error(body: string): void {
  app.config.globalProperties.$toast.add({
    severity: 'error',
    summary: 'Error Message',
    detail: body,
    life: lifeTime
  })
}
