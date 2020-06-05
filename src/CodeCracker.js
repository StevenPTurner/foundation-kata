function decrypt(encryptedWord, key) {
    encryptedWord.replace("a", "p");
    return encryptedWord;     
}

module.exports = {
    decrypt: decrypt
}
