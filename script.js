const members = [];

document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const membershipId = document.getElementById('membership-id').value;
    const joiningDate = document.getElementById('joining-date').value;

    const member = {
        name: name,
        email: email,
        membershipId: membershipId,
        joiningDate: joiningDate
    };

    members.push(member);
    displayMembers();
    generateCertificate(member);
});

function displayMembers() {
    const membersList = document.getElementById('members-list');
    membersList.innerHTML = '';

    members.forEach((member, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${member.name} (${member.membershipId}) - ${member.email} - Joined on: ${member.joiningDate}`;
        membersList.appendChild(li);
    });
}

function generateCertificate(member) {
    const certificateDiv = document.getElementById('certificate');
    certificateDiv.innerHTML = `
        <h2>Certificate of Membership</h2>
        <p>This is to certify that</p>
        <h3>${member.name}</h3>
        <p>with Membership ID</p>
        <h4>${member.membershipId}</h4>
        <p>and email</p>
        <h4>${member.email}</h4>
        <p>has joined on</p>
        <h4>${member.joiningDate}</h4>
        <p>and is a registered member.</p>
    `;

    certificateDiv.style.display = 'block';
}
