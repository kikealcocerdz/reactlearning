// @ts-check

import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173/'
const PREFIX_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

test('app shows type and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await page.textContent
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIX_IMAGE_URL)).toBeTruthy()
})
