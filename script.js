// complete the given function

function palindrome(str){
	str=str.toLowerCase();
     let start = 0;
            let end = str.length - 1;

            while (start <= end) {
                let a = str[start];
                let b = str[end];
                if (a != b) return false;
                start++;
                end--;
            }
	return true;
}
module.exports = palindrome
