/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

const text = "Hi, I am learning Javascript"

function countervowel(text) {
    const vowels = "aeiouAEIOU";

    for (let i=0; i < vowels.length; i++) {
        const vowel = vowels.charAt(i);

        if (text.includes(vowel)) {
            text = text.replaceAll(vowel, "")
        }
    }

    return text;
}

showContent(4, countervowel(text));