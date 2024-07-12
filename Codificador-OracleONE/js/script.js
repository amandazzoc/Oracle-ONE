const noMessage = document.querySelector('#wrapperCrypted');
const haveMessage = document.querySelector('#wrapperTxtCrypted');
const substitutionTable = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const resubstitutionTable = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

const reverseSubstitutionTable = Object.fromEntries(
    Object.entries(substitutionTable).map(([key, value]) => [value, key])
);

const reverseReSubstitutionTable = Object.fromEntries(
    Object.entries(substitutionTable).map(([key, value]) => [value, key])
);

function validateMessage(message) {

    const regex = /^[a-z\s]*$/;
    return regex.test(message);
}

function encryptMessage() {
    const message = document.getElementById('message').value;
    let encryptedMessage = message;

    if (!validateMessage(message)) {
        alert('A mensagem contém letras maiúsculas ou caracteres acentuados. Por favor, utilize apenas letras minúsculas e sem acento.');
        return;
    }

    if (message == '') {
        haveMessage.classList.remove('active');
        noMessage.classList.add('active');

    } else {
        noMessage.classList.remove('active');
        haveMessage.classList.add('active');

        for (const [key, value] of Object.entries(substitutionTable)) {
            encryptedMessage = encryptedMessage.split(key).join(value);
        }

        document.getElementById('result').innerText = encryptedMessage;
    }

}

function decryptMessage() {
    const message = document.getElementById('message').value;
    let decryptedMessage = message;

    if (!validateMessage(message)) {
        alert('A mensagem contém letras maiúsculas ou caracteres acentuados. Por favor, utilize apenas letras minúsculas e sem acento.');
        return;
    }

    if (message == '') {
        haveMessage.classList.remove('active');
        noMessage.classList.add('active');

    } else {
        noMessage.classList.remove('active');
        haveMessage.classList.add('active');

        for (const [key, value] of Object.entries(resubstitutionTable)) {
            decryptedMessage = decryptedMessage.split(key).join(value);
        }

        document.getElementById('result').innerText = decryptedMessage;
    }
}

function copy() {
    var copyText = document.getElementById('result').innerText;

    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied the text: " + copyText);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
