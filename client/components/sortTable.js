export function sortTable(element) {
  let rows; let switching; let i; let x; let y; let
    shouldSwitch;
  const table = document.querySelector('table');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;

    if (element.classList.contains('ascending')) {
      // console.log('ascending is here!!!');

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[element.cellIndex];
        y = rows[i + 1].getElementsByTagName('TD')[element.cellIndex];

        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }

    if (!element.classList.contains('ascending')) {
      // console.log('ascending is NOT here!!!');
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[element.cellIndex];
        y = rows[i + 1].getElementsByTagName('TD')[element.cellIndex];
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}

export default sortTable;
