export class ListNode<T = number> {
  val: T;
  next?: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T>) {
    // TODO: make a default type case for T
    this.val = val === undefined ? (0 as any as T) : val;
    this.next = next;
  }

  toString(): string {
    return `{val: ${this.val}}`;
  }
}

export function ArrayToList<T>(array: T[]): ListNode<T> {
  const head = new ListNode(array[0]);
  array
    .slice(1)
    .reduce<ListNode<T>>((curr, val) => (curr.next = new ListNode(val)), head);
  return head;
}

export function ListToArray<T>(list: ListNode<T>): T[] {
  const array: T[] = [];
  while (list != null) {
    array.push(list.val);
    list = list.next as ListNode<T>;
  }

  return array;
}
