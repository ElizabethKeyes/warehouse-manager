const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

drawPackages(packages)

let template = ""

function drawPackages(packages) {
  let packageElem = document.getElementById("packages")
  let template = ""
  packages.forEach(p => {
    template += `<div class="col-5 text-light border m-2">
    <p>TO: ${p.to}<br>
      WEIGHT: ${p.weight}<br>
        PRIORITY: ${p.priorityLevel}<br>
          FRAGILE: ${p.isFragile}</p>
      </div>`
  })
  packageElem.innerHTML = template
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