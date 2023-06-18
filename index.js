// Write your solution in this file!
let employee ={name:"John Doe", streetAddress:"3 Dihn Street"}
function updateEmployeeWithKeyAndValue(employee,key,value){
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructiveUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return newEmployee
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {employee}
    delete(newEmployee[key])
}

function destructivlyDeleteFromEmployeeByKey(employee, key){
    delete(employee[key])
    return employee
}
