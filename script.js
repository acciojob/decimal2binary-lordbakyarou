function decimalToBinary(num) {
  //Write you code here

	let numa = "";

	while(num != 0){
		numa += num %2;
		num  = num /2;
	}
	console.log(numa);
}

window.decimalToBinary = decimalToBinary;
