
exports.isPrime = function(n)
	{ var i;
	var flag=false;
	for(i=2;i<n;i++){
		if(n%i==0){
			flag=true;
			break;
		}
	}
	return !flag;
	};

exports.calFact = function(n) { 
       var fact=1;
	   if(n==0 || n==1){
		   return fact;
	   }else{
		   for(var i=n;i>=1;i--){
			   fact=fact*i;
		   }
	   }
	return fact;
    };

exports.isPerfect = function(n) {
	var temp=0;
	var flag=true;
	for(var i=1;i<=n/2;i++){
		if(n%i==0){
			temp+=i;
			flag=false;
			break;
		}
	}
   return  !flag;
	};

