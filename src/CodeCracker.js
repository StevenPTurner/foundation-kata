function decrypt(encryptedWord, key) {

    var result = encryptedWord;

    result = result.replace(/p/g, "a");
    result = result.replace(/b/g, "z");

    return result;
}

module.exports = {
    decrypt: decrypt
}
