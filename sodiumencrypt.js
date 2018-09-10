var encryption = require('sodium-encryption')

    var key = encryption.key()
    var nonce = encryption.nonce()
    var message = Buffer('a message')

    var box = encryption.encrypt(message, nonce, key)

    console.log('encrypted message is:', box)
    console.log('decrypted message is:', encryption.decrypt(box, nonce, key))
