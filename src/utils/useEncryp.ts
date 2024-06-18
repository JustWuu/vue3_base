import CryptoJS from 'crypto-js'

class Encryp {
  KEY: any
  IV: any
  constructor() {
    this.KEY = import.meta.env.VITE_ENCRYP_KEY
    this.IV = import.meta.env.VITE_ENCRYP_IV
  }
  // AES 加密
  aesEncryp(value: string) {
    const KEY = this.base64Decrypt(this.KEY)
    const IV = this.base64Decrypt(this.IV)
    //
    const dataHex = CryptoJS.enc.Utf8.parse(value)
    const keyHex = CryptoJS.enc.Utf8.parse(KEY)
    const ivHex = CryptoJS.enc.Utf8.parse(IV)

    const encrypted = CryptoJS.AES.encrypt(dataHex, keyHex, {
      iv: ivHex,
      mode: CryptoJS.mode.CBC, // 加密模式
      padding: CryptoJS.pad.Pkcs7
    })

    let encryptedVal = encrypted.ciphertext.toString()
    return encryptedVal
  }

  // AES 解密
  aesDecrypt(value: string) {
    const KEY = this.base64Decrypt(this.KEY)
    const IV = this.base64Decrypt(this.IV)
    //
    let encryptedHexStr = CryptoJS.enc.Hex.parse(value)
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const keyHex = CryptoJS.enc.Utf8.parse(KEY)
    const ivHex = CryptoJS.enc.Utf8.parse(IV)

    let decrypt = CryptoJS.AES.decrypt(srcs, keyHex, {
      iv: ivHex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  }

  // 先轉utf8，再加密
  base64Encryp(value: string) {
    const Uft8 = CryptoJS.enc.Utf8.parse(value)
    return CryptoJS.enc.Base64.stringify(Uft8)
  }

  // 解密，再轉為utf8格式的字串
  base64Decrypt(value: string) {
    const base64 = CryptoJS.enc.Base64.parse(value)
    return base64.toString(CryptoJS.enc.Utf8)
  }
}

export { Encryp as default }

// https://juejin.cn/post/7007221498649772063
