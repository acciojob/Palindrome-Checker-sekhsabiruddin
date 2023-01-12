// complete the given function

function palindrome(str){
    let start =0;
	let end=str.length-1;
	while(start]<=str[end]){
		if(str[start]!=str[end]) return false;
				start++;
		end--;
	}
	return ture;
}
module.exports = palindrome
