document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'BatchD1') {
        document.getElementById('adminTable').style.display = 'table';
        fetch('fetch_students.php')
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('#adminTable tbody');
                tbody.innerHTML = ''; // Clear existing rows
                data.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.usn}</td>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.email}</td>
                        <td>${student.teamNumber}</td>
                        <td contenteditable="true">${student.grades || ''}</td>
                    `;
                    tbody.appendChild(row);
                });
            });
    } else {
        alert('Incorrect password');
    }
});
