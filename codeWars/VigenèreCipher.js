function VigenèreCipher(key, abc) {

    this.encode = function (str) {
        const abcArr = abc.split('')
        let keyVal = [];

        for (let i in key) {
            keyVal.push(abcArr.indexOf(key[i]))
        }

        let count = 0
        let result = ''

        for (let j in str) {
            if (abcArr.includes(str[j])) {
                let shifting = (abcArr.indexOf(str[j]) + keyVal[count])
                console.log(shifting)
                if (+shifting >= +abcArr.length) {
                    result += abcArr[+shifting - abcArr.length];
                } else {
                    result += abcArr[+shifting];
                }
            } else {
                result += str[j]
            }
            count++
            if (count >= keyVal.length) {
                count = 0;
            }
        }
        return result
    };

    this.decode = function (str) {

            const abcArr = abc.split('')
            let keyVal = [];

            for (let i in key) {
                keyVal.push(abcArr.indexOf(key[i]))
            }

            let count = 0
            let result = ''

            for (let j in str) {
                if (abcArr.includes(str[j])) {
                    let shifting = abcArr.indexOf(str[j]) - keyVal[count]
                    console.log(shifting)
                    if (+shifting < 0) {
                        result += abcArr[abcArr.length - Math.abs((abcArr.indexOf(str[j]) - keyVal[count]))]
                    } else {
                        result += abcArr[Math.abs((abcArr.indexOf(str[j]) - keyVal[count]))]
                    }
                } else {
                    result += str[j]
                }
                count++
                if (count >= keyVal.length) {
                    count = 0;
                }
            }

            return result;
        };
}


let c = new VigenèreCipher("password", "abcdefghijklmnopqrstuvwxyz");

console.log(c.encode('codewars'));