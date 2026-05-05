document.addEventListener("DOMContentLoaded", function() {
    const githubButtons = document.querySelectorAll('.btn-github');

    githubButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            alert("Mengarahkan ke repositori GitHub...");

            const linkGitHub = button.getAttribute('href');

            window.open(linkGitHub, '_blank'); 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    const showAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');
        alertPlaceholder.append(wrapper);

        setTimeout(() => {
            const alert = bootstrap.Alert.getOrCreateInstance(wrapper.querySelector('.alert'));
            alert.close();
        }, 3000);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            //buatlah agar inputan namanya dan deskripsi harus ada hurufnya
            const namePattern = /[a-zA-Z]/;
            if (!namePattern.test(name)) {
                showAlert('Nama harus mengandung huruf!', 'danger');
            } else if (!namePattern.test(message)) {
                showAlert('Deskripsi harus mengandung huruf!', 'danger');
            } else if (!email) {
                showAlert('Mohon isi semua field sebelum mengirim!', 'danger');
            } else {
                showAlert('Terima kasih! Pesan Anda telah berhasil dikirim.', 'success');
                contactForm.reset();
            }
        });
    }
});

function showImage(src, alt) {
    document.getElementById('modalImage').src = src;
    document.getElementById('modalTitle').innerText = alt;
}