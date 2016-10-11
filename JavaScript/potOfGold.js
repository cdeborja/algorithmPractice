function max_coin( coin, start, end ) {
	if (start >= end) {
		return 0;
  }

	var a = coin[start] + Math.min( max_coin( coin, start+2 ,end ), max_coin( coin, start+1,end-1 ));
	var b = coin[end] + Math.min( max_coin( coin, start+1,end-1 ), max_coin( coin, start,end-2 ) );
	return Math.max(a,b);
}
