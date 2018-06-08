const BOTS = [
    'Pulsepoint', 'CloudFlare', 'Phantom', 'Android 4', 'Android 5', 'Googlebot', 'AdsBot-',
    'Linux', 'Chrome/', 'Bingbot', 'facebookexternalhit', 'facebot', 'python', 'ia_archiver'
  ]
  
  function isBotB(userAgent: string) {
    return BOTS.includes(userAgent)
  }