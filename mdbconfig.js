
      // Initialize MDB components after page loads
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize tooltips only on visible elements
        function initTooltips() {
          const tooltipTriggerList = document.querySelectorAll('[data-mdb-toggle="tooltip"]');
          tooltipTriggerList.forEach(function(tooltipTriggerEl) {
            try {
              new mdb.Tooltip(tooltipTriggerEl);
            } catch (e) {
              console.log('Tooltip initialization error:', e);
            }
          });
        }
        
        // Initialize form inputs
        function initFormInputs() {
          const inputs = document.querySelectorAll('.form-outline');
          inputs.forEach(input => {
            if (input.querySelector('.form-control').value) {
              input.classList.add('form-active');
            }
          });
        }
        
        // Tab switching functionality
        const tabButtons = document.querySelectorAll('[data-tab]');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
          button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show active tab content
            tabContents.forEach(content => {
              content.classList.remove('active');
              if (content.id === `${tabId}-tab`) {
                content.classList.add('active');
              }
            });
            
            // Reinitialize tooltips when tab changes
            setTimeout(initTooltips, 100);
          });
        });
        
        // Form input events
        document.querySelectorAll('.form-control').forEach(input => {
          input.addEventListener('focus', function() {
            this.parentElement.classList.add('form-active');
          });
          
          input.addEventListener('blur', function() {
            if (!this.value) {
              this.parentElement.classList.remove('form-active');
            }
          });
        });
        
        // Login form handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
          e.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          
          // Simple validation
          if (email && password) {
            // Show main app, hide login
            document.getElementById('loginScreen').classList.add('hidden');
            document.getElementById('mainApp').classList.remove('hidden');
            document.getElementById('userEmailDisplay').textContent = email;
            
            // Initialize MDB components after showing main app
            setTimeout(() => {
              initTooltips();
              initFormInputs();
            }, 100);
          } else {
            document.getElementById('loginMessage').textContent = 'Please enter both email and password';
          }
        });
        
        // Logout button
        document.getElementById('logout-btn').addEventListener('click', function() {
          document.getElementById('loginScreen').classList.remove('hidden');
          document.getElementById('mainApp').classList.add('hidden');
        });
        
        // Initial tooltip initialization
        initTooltips();
        initFormInputs();
      });
   