import { beforeEach, describe, expect, test, vi } from 'vitest'
import { changeWindowLocation, reloadWindow } from './window-functions'

describe('Window Functions', () => {
  const originalWindowLocation = window.location

  vi.spyOn(window.location, 'reload')

  beforeEach(() => {
    window.location = originalWindowLocation
  })

  describe('reloadWindow', () => {
    test('reloads the window', () => {
      reloadWindow()

      expect(window.location.reload).toHaveBeenCalled()
    })
  })

  describe('changeWindowLocation', () => {
    test('changes location to https://www.google.com', () => {
      changeWindowLocation()

      expect(window.location).toBe('https://www.google.com')
    })
  })

  test('window location should not be google.com here?', () => {
    expect(window.location).not.toBe('https://www.google.com')
  })
})
