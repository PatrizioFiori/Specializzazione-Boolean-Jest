const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./esercizi.js");


// 🏆 Snack 1 Creare un test che verifichi la seguente descrizione: 
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Marco Rossi")).toBe("MR")
    expect(getInitials("Marco Bianchi")).toBe("MB")
    expect(getInitials("Marco Neri")).toBe("MN")
    expect(getInitials("XCdcsdflk")).toBe("X")
})





//🏆 Snack 2 Creare un test che verifichi la seguente descrizione:
// 🏆 Snack 4 Creare un test che verifichi la seguente descrizione:
//🏆 Snack 6 Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase, sostituisce gli spazzi vuoti 
// con - e lancia un errore se il titolo è vuoto o non valido."


test("La funzione createSlug restituisce una stringa in lowercase, \n sostituisce gli spazzi vuoti con - e lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(createSlug(" Corso Di SpecializZazione su react e typescript ")).toBe("corso-di-specializzazione-su-react-e-typescript")
    expect(() => createSlug("")).toThrow("La stringa non può essere vuota");
    expect(() => createSlug(null)).toThrow("La stringa non può essere vuota");
    expect(() => createSlug(undefined)).toThrow("La stringa non può essere vuota");

})



//🏆 Snack 3 Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 6, 8, 10, 25])).toBe(10.8)
})




//🏆 Snack 5 Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBe(true)
    expect(isPalindrome("palla")).toBe(false)
})




//🏆 Snack 7 Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme 
// (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
const posts = [
    { id: 1, titolo: "post con id 1", slug: "testo del post con id 1" },
    { id: 2, titolo: "post con id 2", slug: "testo del post con id 2" },
    { id: 3, titolo: "post con id 3", slug: "testo del post con id 3" },
]


test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, titolo: "post con id 1", slug: "testo del post con id 1" })
    expect(findPostById(posts, 3)).toEqual({ id: 3, titolo: "post con id 3", slug: "testo del post con id 3" })

})


//🎯 Snack 8 (Bonus) Creare due test che verifichino le seguenti descrizioni:
// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."

describe("aggiunta e rimozione di post da un array di post", () => {

    let post

    beforeEach(() => {
        post = [
            { id: 1, titolo: "post con id 1", slug: "testo del post con id 1" },
            { id: 2, titolo: "post con id 2", slug: "testo del post con id 2" },
            { id: 3, titolo: "post con id 3", slug: "testo del post con id 3" },
        ]
    })

    test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
        expect(addPost(post, { id: 4, titolo: "post con id 4", slug: "testo del post con id 4" })).toBe(4);
        expect(addPost(post, { id: 5, titolo: "post con id 5", slug: "testo del post con id 5" })).toBe(5);
    });

    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
        expect(removePost(post, 3)).toBe(2);
        expect(removePost(post, 1)).toBe(1);
    });


})