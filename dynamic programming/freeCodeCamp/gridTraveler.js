// Say that you are a traveler on a 2D grid. You begin in the
// top-left corner and your goal is to travel to the bottom-right
// corner. You may only move down or right
// In how may ways can you travel to the goal on a grid with dimensions m * n?

// Grid Traveler function
const gridTravelerMemo = (m, n, memo = {}) => {
	let key = m + ',' + n;
	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
	return memo[key];
};

const gridTraveler = (m, n) => {
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// Calculate the execution time
const execTime = (m, n) => {
	const start = performance.now();
	console.log(gridTravelerMemo(m, n));
	const end = performance.now();
	console.log('Performance', Math.round((end - start + Number.EPSILON) * 100) / 100, 'ms');
};

// Cases for grid traveler with memoization
execTime(0, 0); // 0
execTime(3, 6); // 21
execTime(7, 11); // 8008
execTime(13, 14); // 5200300
execTime(12, 16); // 7726160
execTime(16, 16); // 155117520
