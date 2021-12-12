function save() {
  const getById = document.getElementById.bind(document);
  const fullName = getById('fullname').value;
  const email = getById('email').value;
  const phone = getById('phone').value;
  const address = getById('address').value;
  let gender = '';
  if (getById('male').checked) {
    gender = getById('male').value
  } else if (getById('female').checked) {
    gender = getById('female').value
  }

  const fullNameError = getById('fullname-error')

  if (_.isEmpty(fullName)) {
    fullNameError.innerHTML = 'Full name is required'
  } else {
    fullNameError.innerHTML = ''
  }

  if (fullName && email && phone && phone && address && gender) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []

    students.push({
      fullName,
      email,
      phone,
      address,
      gender
    })

    localStorage.setItem('students', JSON.stringify(students))
    this.renderStudentList()
  }
}

function renderStudentList() {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []

  if (students.length === 0) {
    document.getElementById('list-student').style.display = 'none'
    return false
  }
  document.getElementById('list-student').style.display = 'block'
  let tableContent = `<tr>
    <td>#</td>
    <td>Full name</td>
    <td>Email</td>
    <td>Phone number</td>
    <td>Address</td>
    <td>Gender</td>
  </tr>`

  students.forEach((student, index) => {
    let studentId = index
    let genderLabel = parseInt(student.gender) === 1 ? 'Male' : 'Female'
    index++;
    tableContent += `<tr>
  <td>${index}</td>
  <td>${student.fullName}</td>
  <td>${student.email}</td>
  <td>${student.phone}</td>
  <td>${student.address}</td>
  <td>${genderLabel}</td>
  <td>
    <a href='#'>Edit</a> | <a href='#' onclick='deleteStudent(${studentId})'>Delete</a>
  </td>
</tr>`
  })
  document.getElementById('grid-students').innerHTML = tableContent;
}

function deleteStudent(id) {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []
  students.splice(id, 1);
  localStorage.setItem('students', JSON.stringify(students))
  this.renderStudentList()
}