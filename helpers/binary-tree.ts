export class Node<T = number> {
  val: T;
  left: Node<T> | null;
  right: Node<T> | null;
  next: Node<T> | null;
  constructor(val?: T, left?: Node<T>, right?: Node<T>, next?: Node<T>) {
    // TODO: default `val` to the correct type. Not sure this is possible
    this.val = val == undefined ? (0 as any as T) : val;
    this.left = left == undefined ? null : left;
    this.right = right == undefined ? null : right;
    this.next = next == undefined ? null : next;
  }
}

export function ArrayToTree<T>(array?: T[]): Node<T> | null {
  if (array == null || array?.length === 0) return null;
  const root = new Node(array[0]);
  let previous_layer: Node<T>[] = [root];
  let cursor = 0;
  while (cursor < array.length) {
    let new_previous_layer: Node<T>[] = [];
    for (let i = 0; i < previous_layer.length; i++) {
      if (array[++cursor] != null) {
        const left = new Node<T>(array[cursor]);
        previous_layer[i].left = left;
        new_previous_layer.push(left);
      }
      if (array[++cursor] != null) {
        const right = new Node<T>(array[cursor]);
        previous_layer[i].right = right;
        new_previous_layer.push(right);
      }
    }
    previous_layer = new_previous_layer;
  }
  return root;
}

export function TreeToArray<T>(root: Node<T>): T[] {
  const array: T[] = [];
  let previous_layer: Node<T>[] = [root];

  while (previous_layer.length > 0) {
    for (let node of previous_layer) {
      array.push(node.val);
    }
    previous_layer = previous_layer.reduce<Node<T>[]>((prev, curr) => {
      if (curr.left != null) prev.push(curr.left);
      if (curr.right != null) prev.push(curr.right);
      return prev;
    }, []);
  }

  return array;
}
