document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch_students.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#studentTable tbody');
            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.usn}</td>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.email}</td>
                    <td>${student.teamNumber}</td>
                `;
                tbody.appendChild(row);
            });
        });
});
