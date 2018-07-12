let nbr: number = 0;

function display(nbr: number): void {
  let inpCtrl: HTMLElement = document.getElementById("nbr");
  inpCtrl.value = nbr;
}

function change(amt: number): void {
  nbr += amt;
  display(nbr);
}

function loaded(): void {
  display(nbr);
}