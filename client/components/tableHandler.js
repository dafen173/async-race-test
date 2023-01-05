import { sortTable } from "./sortTable";


export const tableHandler = (el) => {
    // if (el.target.tagName != 'TH') return;
    let targetEl = el.target;
    let thIndex = el.target.cellIndex;
    if(thIndex === 3 || thIndex === 4) {
        console.log(thIndex);

        el.target.classList.toggle("ascending");
        sortTable(targetEl);
    } else {
        return;
    }

    // console.log(el.target.cellIndex);
    // let thIndex = el.target.cellIndex;
    // sortTable(thIndex);
}