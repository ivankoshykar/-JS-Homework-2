let Name = prompt ('Please enter your name')
if (Name == 'admin') {
    alert ('Name correct');
} else {
    alert('Something went wrong...')
}

let Password = prompt ('Please enter your password')
if (Password == 'qWeRty123') {
    alert ('Password correct');
    alert ('Welcome ' + Name)
} else {
    alert('Something went wrong...')
}