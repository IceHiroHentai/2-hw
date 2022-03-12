const mass = [400, 122, 132, 111, 1100, 688, 900]

block = document.querySelector("div");

sometext = false;
while (!sometext) {
  sometext = true;
  for (i = 0; i < mass.length; i += 1) {
    if (mass[i + 1] > mass[i]) {
      sometext = false;
      sometext2 = mass[i + 1];
      mass[i + 1] = mass[i];
      mass[i] = sometext2;
    }
  }
}

block.innerText = mass;