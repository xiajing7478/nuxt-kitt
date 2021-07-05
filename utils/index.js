import CryptoJS from 'crypto-js'

const key = CryptoJS.enc.Utf8.parse('f0d9097ab318b661f3e4d65d1f891fee') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('abcdefghijklmnop') // 十六位十六进制数作为密钥偏移量
    // 解密方法
export function decrypt(word) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

// 加密方法
export function encrypt(word) {
    const srcs = CryptoJS.enc.Utf8.parse(word)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}