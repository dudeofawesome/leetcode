# 143. Reorder List

| Difficulty | Likes | Dislikes |
| ---------- | ----- | -------- |
| Medium     | 4846  | 190      |

<details>
<summary>Tags</summary>

`Linked List` | `Two Pointers` | `Stack` | `Recursion`

</details>

### Description

You are given the head of a singly linked-list. The list can be represented as:

```
L₀ → L₁ → … → Lₙ₋₁ → Lₙ
```

_Reorder the list to be on the following form:_

```
L₀ → Lₙ → L₁ → Lₙ₋₁ → L₂ → Lₙ₋₂ → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

##### Example 1:

![image](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

##### Example 2:

![image](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

### Constraints:

-   The number of nodes in the list is in the range `[1, 5 * 10⁴]`.
-   `1 <= Node.val <= 1000`
