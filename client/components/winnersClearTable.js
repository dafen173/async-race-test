/* eslint-disable import/no-cycle */
import { winnersTable } from '../frontend';

export function clearTable() {
  winnersTable.innerHTML = '';
}

export default clearTable;
