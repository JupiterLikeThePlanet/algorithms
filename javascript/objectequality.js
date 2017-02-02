function isEqual(a, b) {

	if (typeof a != typeof b) {
		return false
	}else if (a.length != b.length) {
		return false
	}else{
		return true
	}



};


isEqual([], {}); 