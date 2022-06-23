# Dynamic Programming - freeCodeCamp

**Source:** [freeCodeCamp.org](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=2327s)<br>
**Start Date:** June 21th, 2022<br>
**End Date:** To be defined<br>
**Language:** Javascript<br>
**Author:** Pablo Beltran<br>

This document contains the solution of the dynamic programming problems proposed in the video _Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges_ by _freeCodeCamp.org_. Each of these problems are focused on the use of memoization in order to improve the execution time of traditional recursive solutions.

## Fibonacci

The first problems ask us to calculate the fibonacci sequence of a given number. As mentionated before, we are not only interested in a solution, but also in performance. We can represent the binary tree of a fibonacci sequence using the traditional algorithm versus the memoization algorithm.

![Fibonacci Representation](/dynamic%20programming/freeCodeCamp/resources/fibonacci.png)

### Space and Time Complexity

As we can see on the upper graphic, the time complexity is higher on the Traditional Algorithm. This is why for each node, we split in 2, which are the values of n-1 and n-2 until we reach the return 1 cases (n = 1 or n = 2). On the other hand, the Memoization Algorithm only needs to calculate once the value of the n node since we already stored previous results. <br>

<table>
<tr>
    <th>Traditional Algorithm </th>
    <th>Memoization Algorithm</th>
</tr>

<tr><td>

| Field | Value  |
| ----- | ------ |
| Time  | O(2^n) |
| Space | O(n)   |

</td><td>

| Field | Value |
| ----- | ----- |
| Time  | O(n)  |
| Space | O(n)  |

</td></tr> 
</table>

As for the Space Complexity, we can observe that both algorithms share the same value of O(n), this is due the fact that both Algorithms have the depth of n until it reaches the return 1 cases (n = 1 or n = 2).

### Execution Results

The following table contains the comparisson between the execution time of both algorithms. As we can observe, with low values, the algorithm performs similar. Once we reach higher numbers, the difference is significant. 

<table>
<tr>
    <th>Traditional Algorithm </th>
    <th>Memoization Algorithm</th>
</tr>

<tr><td>

| Number | Time      |
| ------ | --------- |
| 5      | 0.03 ms   |
| 12     | 0.04 ms   |
| 25     | 1.71 ms   |
| 34     | 31.01 ms  |
| 45     | 6154.8 ms |

</td><td>

| Number | Time    |
| ------ | ------- |
| 5      | 0.04 ms |
| 12     | 0.04 ms |
| 25     | 0.04 ms |
| 34     | 0.11 ms |
| 45     | 0.05 ms |

</td></tr> 
</table>

Finally, something that can be interesting is the fact that the execution time of 34 is higher than the execution time of 45 in the Memoization Algorithm.

_Note: Each value is the average of 5 execution time results_

## Grid Traveler 

The second problem has the following instructions:

*Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right. In how may ways can you travel to the goal on a grid with dimensions m * n?*

With the instructions we can know that the traveler can move only in the X and Y axis. The movement is restricted by a down and right movement. The starting point is [0][0] with the final point in [m-1][n-1], which is the botton-right corner of the matrix.

![Grid Traveler]()

### Space and Time Complexity

<table>
<tr>
    <th>Traditional Algorithm </th>
    <th>Memoization Algorithm</th>
</tr>

<tr><td>

| Field | Value  |
| ----- | ------ |
| Time  | O(2^n) |
| Space | O(n)   |

</td><td>

| Field | Value |
| ----- | ----- |
| Time  | O(n)  |
| Space | O(n)  |

</td></tr> 
</table>

### Execution Results

<table>
<tr>
    <th>Traditional Algorithm </th>
    <th>Memoization Algorithm</th>
</tr>

<tr><td>

| Grid Size | Time       |
| ------    | ---------  |
| (3, 6)    | 0.04 ms    |
| (7, 11)   | 1.30 ms    |
| (13, 14)  | 94.07 ms   |
| (12, 16)  | 140.20 ms  |
| (16, 16)  | 2740.12 ms |

</td><td>

| Grid Size | Time      |
| ------    | --------- |
| (3, 6)    | 0.08 ms   |
| (7, 11)   | 0.11 ms   |
| (13, 14)  | 0.18 ms   |
| (12, 16)  | 0.24 ms   |
| (16, 16)  | 0.21 ms   |

</td></tr> 
</table>