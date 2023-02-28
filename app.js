const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs',
  isMissing: false
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk',
  isMissing: false
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147',
  isMissing: false
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145',
  isMissing: false
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z',
  isMissing: false
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz',
  isMissing: false
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367',
  isMissing: false
}]

drawPackages(packages)
losePackage()

let template = ""

function drawPackages(packages) {
  let packageElem = document.getElementById("packages")
  let template = ""
  packages.forEach(p => {
    template += `<div class="col-5 text-light border m-2">
    <p>TO: ${p.to}<br>
      WEIGHT: ${p.weight}<br>
        PRIORITY: ${p.priorityLevel}<br>
          FRAGILE: ${p.isFragile ? 'yes' : 'no'}</p>
      </div>`
  })
  packageElem.innerHTML = template
}

function losePackage() {
  let randomIndex = Math.floor(Math.random() * packages.length)
  let lostPackage = packages[randomIndex]
  lostPackage.isMissing = true
  console.log(lostPackage, "losePackage function");
}

function giveClue() {
  let lostPackage = packages.find(p => p.isMissing == true)
  console.log(lostPackage, "giveClue function");
  let clues = ["priorityLevel", "isFragile", "weight"]
  let randomIndex = Math.floor(Math.random() * clues.length)
  let randomClue = clues[randomIndex]
  let clueElem = document.getElementById("clues")
  // clueElem.innerText = randomClue
  switch (randomClue) {
    case "priorityLevel":
      clueElem.innerHTML = `<p>The package has ${lostPackage.priorityLevel} delivery.</p>`
      break;
    case "isFragile":
      clueElem.innerHTML = `<p>The package ${lostPackage.isFragile ? 'is fragile' : 'is not fragile'}</p>`
      break;
    case "weight":
      clueElem.innerHTML = `<p>The package ${lostPackage.weight >= 5 ? 'is heavy' : 'is not heavy'}</p>`
      break;
  }
}

function filterHeavy() {
  console.log("filterHeavy invoked")
  let heavyPackages = packages.filter(p => p.weight >= 5)
  drawPackages(heavyPackages)
}

function filterPriority() {
  console.log("filterPriority invoked");
  let priorityPackages = packages.filter(p => p.priorityLevel == "express")
  drawPackages(priorityPackages)
}

function filterFragile() {
  console.log("filterFragile invoked");
  let fragilePackages = packages.filter(p => p.isFragile)
  drawPackages(fragilePackages)
}