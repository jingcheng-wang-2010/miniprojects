/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
    //console.log("Initial:", price, cash, cid)
    let CURRENCY = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER":0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
    let change = [];
    let changeRemain = cash - price;
    console.log("changeRemain:", changeRemain);
    const totalCID = Math.round(cid.reduce((sum, unit) => sum + unit[1], 0) * 100) / 100;
    console.log("totalCID:", totalCID);
    if (totalCID < changeRemain) { 
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (totalCID === changeRemain) {
      return {status: "CLOSED", change: cid};
    }
    for (let i = cid.length-1; i > -1; i--) {
      console.log("cid[i]:", cid[i]);
      if (cid[i][1] < changeRemain) {
        changeRemain -= cid[i][1];
        changeRemain = Math.round(changeRemain * 100) / 100;
        change.push(cid[i]);
        console.log("LOOP1 changeRemain:", changeRemain);
      } else {
        let j = 0;
        while (CURRENCY[cid[i][0]] * j <= changeRemain) {
          j++;
        }
        j--;
        console.log("CURRENCY[cid[i][0]] * j:", CURRENCY[cid[i][0]] * j);
        changeRemain -= CURRENCY[cid[i][0]] * j;
        changeRemain = Math.round(changeRemain * 100) / 100;
        change.push([cid[i][0], CURRENCY[cid[i][0]] * j]);
        console.log("LOOP2 changeRemain:", changeRemain);
      }
    }
    console.log("changeRemain:", changeRemain);
    console.log("change:", change);
    if (changeRemain !== 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      change = change.filter((item) => item[1] > 0);
      return {status: "OPEN", change: change};
    }
  
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));