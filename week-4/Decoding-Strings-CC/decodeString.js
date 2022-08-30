// Write your code below this line
function decode(str)
    {
        let integerstack = [];
        let stringstack = [];
        let temp = "", result = "";
 
        for (let i = 0; i < str.length; i++)
        {
            let count = 0;

            if (str[i] >= '0' && str[i] <='9')
            {
                while (str[i] >= '0' && str[i] <='9')
                {
                    count = count * 10 + str[i] - '0';
                    i++;
                }
 
                i--;
                integerstack.push(count);
            }
            else if (str[i] == ']')
            {
                temp = "";
                count = 0;
 
                if (integerstack.length > 0)
                {
                    count = integerstack[integerstack.length - 1];
                    integerstack.pop();
                }
 
                while (stringstack.length > 0 &&
                       stringstack[stringstack.length - 1] != '[')
                {
                    temp = stringstack[stringstack.length - 1] + temp;
                    stringstack.pop();
                }
 
                if (stringstack.length > 0 &&
                    stringstack[stringstack.length - 1] == '[')
                {
                    stringstack.pop();
                }
                for (let j = 0; j < count; j++)
                {
                    result = result + temp;
                }
                for (let j = 0; j < result.length; j++)
                {
                    stringstack.push(result[j]);
                }
                result = "";
            }
            else if (str[i] == '[')
            {
                if (str[i - 1] >= '0' && str[i - 1] <='9')
                {
                    stringstack.push(str[i]);
                }
 
                else
                {
                    stringstack.push(str[i]);
                    integerstack.push(1);
                }
            }
            else
            {
                stringstack.push(str[i]);
            }
        }
        while (stringstack.length > 0)
        {
            result = stringstack[stringstack.length - 1] + result;
            stringstack.pop();
        }
 
        return result;
    }
     
    let str = "3[b2[ca]]";
    console.log(decode(str));



    // uncomment out to see the solution that was given by devmountain
    // function decodeString(code) {
    //   // Capture the number to decode the string
    //   let decipher = Number(code[0])
    //   // Create a solution string to add letters to one-by-one
    //   let solution = ""
    //   // Start iterating through the string, starting at index 1 to avoid the decipher
    //   for (let i = 1; i < code.length; i++) {
    //     // Capture the ascii code for the given letter, plus the value of the decipher
    //     let strValue = code[i].charCodeAt() + decipher
    //     // Add the letter the belongs to the updated ascii value to the solution string
    //     solution += String.fromCharCode(strValue)
    //   }
    //   // return the solution string
    //   return solution
    // }