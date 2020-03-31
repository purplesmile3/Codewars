/*Subset and Superset

If every member of set A is also a member of set B, then A is said to be a subset of B, written A ⊆ B (also pronounced "A is contained in B"). Equivalently, we can write B ⊇ A, read as "B is a superset of A", "B includes A", or "B contains A".

Example:
  {1, 3} ⊆ {1, 2, 3, 4}.
  {1, 2, 3, 4} ⊆ {1, 2, 3, 4}.

  {1, 2, 3, 4} ⊇ {1, 3}.
  {1, 2, 3, 4} ⊇ {1, 2, 3, 4}.
Task
Create 2 functions:

isSubsetOf getting 2 sets as arguments and returning true if 2d set contains all elements of 1st one.

isSupersetOf getting 2 sets as arguments and returning true if 1st set contains all elements of 2d one.

Examples:
A = new Set([1,2]);
B = new Set([1,2,3]);

isSubsetOf(A,B) // -> true
isSubsetOf(B,A) // -> false

isSupersetOf(A,B) // -> false
isSupersetOf(B,A) // -> true
 */
function isSubsetOf(s1, s2){
    // ...
   return ([...s1].every(x=>s2.has(x)));
  }
  
  function isSupersetOf(s1, s2){
    // ...
     return ([...s2].every(x=>s1.has(x)));
  }
//better solution
const isSubsetOf = (s1, s2) => [...s1].every(x=>s2.has(x))

const isSupersetOf = (s1, s2) => isSubsetOf(s2, s1)  