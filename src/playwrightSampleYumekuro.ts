const downloadYumekuroIconsAndKabegamis = async () => {
  const { chromium } = require('playwright')
  // const yumekuroSumahoKabegamiImagesPageUrl =
  //   'https://www.yumekuro.com/special/wallpaper/'
  const yumekuroSnsIconsPageUrl = 'https://www.yumekuro.com/special/snsicon/'

  const browser = await chromium.launch({
    // proxy: {
    //   server: 'http://proxy', // FIXME: 環境変数に入れる
    // },
  })
  const page = await browser.newPage()

  // TODO: 壁紙の場合を実装する
  // await page.goto(yumekuroSumahoKabegamiImagesPageUrl)
  await page.goto(yumekuroSnsIconsPageUrl)
  await page.screenshot({
    path: 'tmp/yumekuro_sns_icons_page.png',
    fullPage: true,
  })

  const specialIconItemsCount: number = await page
    .locator('.special-ico_item')
    .count()
  console.log(`[LOG] アイコンの数は ${specialIconItemsCount}個 です。`)

  // TODO: 壁紙の場合は .special-wp_item になる
  const specialIconItemSelectors = await page.locator('.special-ico_item')

  const { exec } = require('child_process')
  const path = require('path')
  const url = require('url')
  const baseUrl = 'https://www.yumekuro.com'

  for (let i = 0; i < specialIconItemsCount; i++) {
    // NOTE: nth(0) から始まる
    const firstSpecialIconItemSelector = specialIconItemSelectors.nth(i)
    const firstSpecialIconItemHref: string =
      await firstSpecialIconItemSelector.getAttribute('href')

    const specialIconItemImageUrl: string = firstSpecialIconItemHref.replace(
      '../..',
      baseUrl
    )
    // https://www.yumekuro.com/assets/download/snsicon/icon_prim_cam.png #=> icon_prim_cam.png
    const imageFilename = path.basename(
      url.parse(specialIconItemImageUrl).pathname
    )

    exec(
      `wget ${specialIconItemImageUrl} -O tmp/${imageFilename}`,
      (err: any, _stdout: any, stderr: any) => {
        if (err) {
          console.log(`stderr: ${stderr}`)

          return
        }
      }
    )
  }

  await browser.close()
}

downloadYumekuroIconsAndKabegamis()
