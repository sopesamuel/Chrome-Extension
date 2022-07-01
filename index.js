
let myLeads = []

/*myLeads = JSON.parse(myLeads)
myLeads.push("www.github.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)*/

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

const inputEl = document.getElementById("input-el")
const saveIn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("save-btn")


/*localStorage.setItem("My", "Parole")
localStorage.getItem("My")
localStorage.clear()*/

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
render(myLeads)
}


tabBtn.addEventListener("click", function(){
   //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0]
        let activeTabId = activeTab.id

myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify(myLeads) )
render(myLeads)
})

})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
    //listItems += "<li> <a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"
    listItems +=`
    <li>
    <a target = '_blank' href ='${[leads[i]]}'> ${[leads[i]]} </a>
    </li>
    `
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function() {
localStorage.clear()
myLeads = []
render(myLeads)
})


saveIn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // This could also work 
    //if (inputEl.value == renderLeads()){
    // } else {inputEl.value = " ";}

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

 
   //const li = document.getElementById('li')
   //li.textContent = myLeads[i]
   //ulEl.append(li)
    