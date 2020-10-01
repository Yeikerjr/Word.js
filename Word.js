export default class Word {

    static capitalize = str => {
        try {
            if (typeof str === 'string') {
                let splitted = str.split(' ')

                let capitalized = splitted.map(c => c.charAt(0).toUpperCase() + c.slice(1))

                const joined = capitalized.join(' ')

                return joined

            } else if (Array.isArray(str)) {

                for (let i = 0; i < str.length; i++) {
                    if (typeof str[i] === 'string') {
                        let replace = str[i].charAt(0).toUpperCase() + str[i].slice(1)
                        str.splice(i, 1, replace)
                    }
                }
                return str
            } else return console.error('capilatize must contain a string or array')

        } catch (error) {
            console.error(error)
        }
    }

}