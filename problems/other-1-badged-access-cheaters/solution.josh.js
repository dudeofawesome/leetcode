export const _export = solve;

function solve(badgeRecords) {
  let people = [];
  for (let i = badgeRecords.length - 1; i >= 0; i--) {
    people[badgeRecords[i][0]] = badgeRecords[i][1];
  }

  console.log(people['Jennifer']);
  let enter_errors = [];
  let exit_errors = [];

  for (let i = 1; i < badgeRecords.length; i++) {
    if (people[badgeRecords[i][0]] === badgeRecords[i][1]) {
      if (badgeRecords[i][0] === 'Jennifer')
        console.log('Jennifer ' + badgeRecords[i][1]);
      if (badgeRecords[i][1] === 'enter') {
        exit_errors[badgeRecords[i][0]] = '';
        console.log(badgeRecords[i][0] + ' forgot to exit');
      } else {
        enter_errors[badgeRecords[i][0]] = '';
        console.log(badgeRecords[i][0] + ' forgot to enter');
      }
    }
    people[badgeRecords[i][0]] = badgeRecords[i][1];
  }

  for (let i in people) {
    if (people[i] !== 'exit') {
      exit_errors[i] = '';
      console.log(i + ' forgot to exit LAST');
    }
  }

  let exit = [];
  let enter = [];
  for (let i in exit_errors) {
    exit.push(i);
  }
  for (let i in enter_errors) {
    enter.push(i);
  }

  console.log([exit, enter]);
  return [exit, enter];

  //   return [exit_errors.keys()]

  //   let people_exit = [];
  //   for (let i = badgeRecords.length; i < badgeRecords.length; i++) {
  //     people[badgeRecords[i][0]] = badgeRecords[i][1];
  //   }
  //   for (let i = 0; i < people_exit.length; i++) {
  //     if (people_exit[i] !== 'exit') {
  //       console.log(people_exit[i].key + ' forgot to exit');
  //     }
  //   }
}

// let a = [];
// a['test'] = 1;

// console.log(a['test'].keys());
