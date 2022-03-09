/*
A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
Object literals encapsulate data, enclosing it in a tidy package.
This minimizes the use of global variables which can cause problems when combining code.
 */

function userPolicyObjectLiteral(type) {
    const polices = {
        admin: "This user is Admin!",
        client: "This user is Client!",
        sales: "This user is Sales!",
        default: "Ops, invalid user profile"
    }

    return polices[type] || polices.default
}

console.log(userPolicyObjectLiteral('sales'))
console.log(userPolicyObjectLiteral())

//--------------------[Usando IF-ELSE]
function userPolicyIfElse(type) {
    if (type === 'admin') {
        return "This user is Admin!"
    } else if (type === 'client') {
        return "This user is Client!"
    } else if (type === 'sales') {
        return "This user is Sales!"
    } else {
        return "Ops, invalid user profile"
    }
}

console.log(userPolicyIfElse('client'))

//--------------------[Usando SWITCH-CASE]
function userPolicySwitchCase(type) {
    switch (type) {
        case 'admin':
            return "This user is Admin!"
        case 'client':
            return "This user is Client!"
        case 'sales':
            return "This user is Sales!"
        default:
            return "Ops, invalid user profile"
    }
}

console.log(userPolicySwitchCase('admin'))