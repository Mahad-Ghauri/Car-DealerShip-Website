document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real application, you would send this to your server
                // For now, we'll just show a success message
                const formContainer = this.parentElement;
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'newsletter-success';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <p>Thank you for subscribing! We've sent a confirmation to ${email}.</p>
                `;
                
                // Replace form with success message
                formContainer.replaceChild(successMessage, this);
                
                // Reset after 5 seconds (for demo purposes)
                setTimeout(() => {
                    formContainer.replaceChild(this, successMessage);
                    emailInput.value = '';
                }, 5000);
            }
        });
    }
}); 
