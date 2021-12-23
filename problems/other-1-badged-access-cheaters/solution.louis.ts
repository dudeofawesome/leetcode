export const _export = solution;

class User {
  in: boolean = false;
  out: boolean = true;

  tailgate_in: boolean = false;
  tailgate_out: boolean = false;

  toString(): string {
    return `i: ${this.in}, o: ${this.out}, ti: ${this.tailgate_in}, to: ${this.tailgate_out}`;
  }
}

function solution(entries: [string, 'enter' | 'exit'][]): [string[], string[]] {
  const users = new Map<string, User>();

  for (const entry of entries) {
    const user =
      users.get(entry[0]) ??
      (users.set(entry[0], new User()).get(entry[0]) as User);

    switch (entry[1]) {
      case 'enter':
        // user just entered
        if (user.in) {
          user.tailgate_out = true;
        }
        user.in = true;
        user.out = false;
        break;
      case 'exit':
        // user just exited
        if (user.out) {
          user.tailgate_in = true;
        }
        user.in = false;
        user.out = true;
        break;
    }
  }

  // check for any users who are still "in" the room
  for (const name of users.keys()) {
    const user = users.get(name) as User;
    if (user?.in) {
      user.tailgate_out = true;
    }
  }

  // transform hash map to dual array
  const tailgaters: [string[], string[]] = [[], []];

  for (const name of users.keys()) {
    const user = users.get(name);

    if (user?.tailgate_in) {
      tailgaters[1].push(name);
    }
    if (user?.tailgate_out) {
      tailgaters[0].push(name);
    }
  }

  return tailgaters;
}
