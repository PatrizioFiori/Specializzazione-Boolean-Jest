const getInitials = (nomeCompleto) => {
    return nomeCompleto
        .trim()
        .split(/\s+/)
        .map(char => char[0].toUpperCase())
        .join("")

}

const createSlug = (stringa) => {
    if (!stringa || stringa.length === 0) {
        throw new Error("La stringa non può essere vuota")
    }

    return stringa
        .trim()
        .normalize()
        .toLowerCase()
        .split(" ")
        .join("-")
}

const average = arrayNumbers =>
    arrayNumbers.reduce((acc, num) => acc + num, 0) / arrayNumbers.length;


const isPalindrome = (parola) => {
    return parola == parola.split("").reverse().join("")
}


const findPostById = (post, id) => post.find(i => i.id === id)


const addPost = (post, obj) => {
    post.push(obj);
    return post.length;
};

const removePost = (post, id) => {
    const index = post.findIndex(item => item.id === id);
    if (index !== -1) {
        post.splice(index, 1);
    }
    return post.length;
};



module.exports = { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost }






