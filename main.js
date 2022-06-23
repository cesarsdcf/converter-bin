// Bin To Dec

function converterBin(numBin) {
  let resDec = 0;
for (let c = 0; c < numBin.length; c++) {
  resDec += Math.pow(2, c) * numBin[numBin.length - c - 1]
}
setResultBin(resDec)
}

function setResultBin(resDec) {
  const resultado = document.querySelector('.resultado-bin')
  resultado.innerHTML = resDec
}

// Dec To Bin

function converterDec(numDec) {
  let num = parseInt(numDec)
  const resBin = num.toString(2)

  setResultDec(resBin)
}


function setResultDec(resBin) {
  const resultado = document.querySelector('.resultado-dec')
  resultado.innerHTML = resBin
}

