// Calculate fibonacci with memoization.
const fibMemo = (num, memo = {}) => {
	if (num in memo) return memo[num];
	if (num <= 2) return 1;
	memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
	return memo[num];
};

// Calculate fibonacci without memoization.
const fib = (num) => {
	if (num <= 2) return 1;
	return fib(num - 2) + fib(num - 1);
};

// Calculate the execution time
const execTime = (num) => {
	const start = performance.now();
	console.log(fibMemo(num));
	const end = performance.now();
	console.log('Performance', Math.round((end - start + Number.EPSILON) * 100) / 100, 'ms');
};

// Cases for fibonacci with memoization
execTime(0); // 0
execTime(5); // 5
execTime(12); // 34
execTime(25); // 144
execTime(34); // 1597
execTime(45); // 28657
