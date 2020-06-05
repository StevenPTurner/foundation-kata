function decrypt(encryptedWord, key) {
    encryptedWord.replace(/p/g, "a");
    encryptedWord.replace(/b/g, "z");
    return encryptedWord;     
}

module.exports = {
    decrypt: decrypt
}
