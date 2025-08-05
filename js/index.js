


const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  let timer;

  // Show modal on homepage load
  window.addEventListener('load', () => {
    contactModal.show();
  });

  // Reopen after 40s if user closes
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      contactModal.show();
    }, 40000); // 40 seconds
  });

  // Handle form submission
  document.getElementById('goldForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Hide form, show thank you
    document.getElementById('goldForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
  });

  // Handle OK button to close modal and reset form
  document.getElementById('okBtn').addEventListener('click', function () {
    contactModal.hide();
    setTimeout(() => {
      document.getElementById('thankYouMessage').style.display = 'none';
      document.getElementById('goldForm').style.display = 'block';
      document.getElementById('goldForm').reset();
    }, 500); // Reset after closing
  });

// Get the like button and heart icon elements
        const likeButton = document.getElementById('likeButton');
        const heartIcon = document.getElementById('heartIcon');

        // Add a click event listener to the like button
        likeButton.addEventListener('click', () => {
            // Toggle the 'liked' class on the heart icon
            heartIcon.classList.toggle('liked');
            // Toggle between solid and regular heart icons
            heartIcon.classList.toggle('fas'); // Solid heart
            heartIcon.classList.toggle('far'); // Regular (empty) heart
        });
   
        
        // Chat Box
        
         function animateCountUp(el, target) {
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 10);

    const updateCount = () => {
      current += increment;
      if (current < target) {
        el.innerText = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = target.toLocaleString();
      }
    };

    updateCount();
  }

  window.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      animateCountUp(counter, target);
    });
  });

// Branches Sectin
let focusedBranch = null; // Track which branch is currently focused

        function setBranchStackIndices() {
            const branchItems = document.querySelectorAll('.branch-item.show');
            branchItems.forEach((item, index) => {
                // Set the custom property for stacking only for visible cards
                item.querySelector('.branch-card').style.setProperty('--index', index);
            });
        }

        function applyFocusEffect(clickedBranchItem) {
            const allBranchItems = document.querySelectorAll('.branch-item.show');

            if (focusedBranch === clickedBranchItem) {
                // If the same branch is clicked again, unfocus all
                allBranchItems.forEach(item => {
                    item.classList.remove('focused', 'blurred');
                });
                focusedBranch = null;
            } else {
                // Focus the clicked branch and blur others
                allBranchItems.forEach(item => {
                    if (item === clickedBranchItem) {
                        item.classList.add('focused');
                        item.classList.remove('blurred');
                        focusedBranch = item;
                    } else {
                        item.classList.add('blurred');
                        item.classList.remove('focused');
                    }
                });
            }
        }

        function resetFocusEffect() {
            const allBranchItems = document.querySelectorAll('.branch-item.show');
            allBranchItems.forEach(item => {
                item.classList.remove('focused', 'blurred');
            });
            focusedBranch = null;
        }

        function filterBranches(state, clickedButton) {
            const branches = document.querySelectorAll('.branch-item');
            const buttons = document.querySelectorAll('.filter-buttons .btn');

            // Reset focus whenever filters are changed
            resetFocusEffect();

            buttons.forEach(button => button.classList.remove('active'));
            clickedButton.classList.add('active');

            branches.forEach(branch => {
                if (state === 'all' || branch.dataset.state === state) {
                    branch.classList.remove('hidden');
                    branch.classList.add('show');
                } else {
                    branch.classList.remove('show');
                    branch.classList.add('hidden');
                }
            });
            // Re-calculate stack indices after filtering
            setBranchStackIndices();
        }

        // Initialize the filters and set initial stacking on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Add click event listeners to each branch card
            document.querySelectorAll('.branch-card').forEach(card => {
                card.addEventListener('click', function(event) {
                    // Stop propagation to prevent document click from firing immediately
                    event.stopPropagation();
                    applyFocusEffect(this.closest('.branch-item'));
                });
            });

            // Add a click listener to the document to reset focus when clicking outside a card
            document.addEventListener('click', function(event) {
                // Only reset if an item was focused and the click was not on a branch item itself
                if (focusedBranch && !event.target.closest('.branch-item')) {
                    resetFocusEffect();
                }
            });

            filterBranches('all', document.querySelector('.filter-buttons .btn.active'));
        });

          const form = document.getElementById("goldCalculatorForm");
  const popup = document.getElementById("thankYouPopup");
  const amountText = document.getElementById("calculatedAmountText");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const carat = document.getElementById("carat").value;
    const grams = parseFloat(document.getElementById("grams").value);

    let ratePerGram = 0;
    if (carat === "24") ratePerGram = 6500;
    else if (carat === "22") ratePerGram = 6000;
    else if (carat === "18") ratePerGram = 5000;

    const totalValue = grams * ratePerGram;

    amountText.innerHTML = `Your estimated gold value is <strong>₹${totalValue.toLocaleString()}</strong>`;
    popup.style.display = "block";
  });

  function closePopup() {
    popup.style.display = "none";
    form.reset();
  }
        
// Testinomials Section

let currentIndex = 0;
const cards = document.querySelectorAll(".stack-card");

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) {
      card.classList.add("active");
    }
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    // Select the specific card that will have the follower pointer effect
    // We target the .blog-content inside the .specific-follower-card
    const targetCardForFollower = document.querySelector('.specific-follower-card .blog-content');
    const authorInfo = document.querySelector('.specific-follower-card .author-info');

    if (targetCardForFollower && authorInfo) {
        // Show the author info when mouse enters the specific card content area
        targetCardForFollower.addEventListener('mouseenter', () => {
            authorInfo.style.display = 'flex';
        });

        // Hide the author info when mouse leaves the specific card content area
        targetCardForFollower.addEventListener('mouseleave', () => {
            authorInfo.style.display = 'none';
        });

        // Make the author info follow the mouse cursor within the card
        targetCardForFollower.addEventListener('mousemove', (e) => {
            // Get the bounding rectangle of the card content area
            const cardRect = targetCardForFollower.getBoundingClientRect();

            // Calculate mouse position relative to the card content area
            const mouseX = e.clientX - cardRect.left;
            const mouseY = e.clientY - cardRect.top;

            // Update the authorInfo's position using CSS transform for smooth movement
            // Adjust -40px or other values as needed to position it correctly above the cursor
            authorInfo.style.transform = `translate(${mouseX}px, ${mouseY - 40}px) translateX(-50%)`;
            authorInfo.style.left = `0`; // Reset left property as transform will handle position
            authorInfo.style.top = `0`; // Reset top property
        });
    }
});


 function toggleFAQ(button) {
      const box = button.parentElement;
      const isActive = box.classList.contains('active');

      // Close all FAQ boxes
      document.querySelectorAll('.faq-box').forEach(b => b.classList.remove('active'));

      // If not already active, open it
      if (!isActive) {
        box.classList.add('active');
      }
    }

   
// Initialize branch filter
function initializeBranchFilter() {
  // Set initial state - show all branches
  const allButton = document.querySelector('.branch-filter-btn[data-filter="all"]');
  if (allButton) {
    filterBranches("all", allButton);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeBranchFilter();
});