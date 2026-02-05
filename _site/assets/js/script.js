/**
 * Masters-Inspired Blog - Interactive Features
 * Elegant, performance-optimized JavaScript for enhanced user experience
 */

// Performance optimization: use single requestAnimationFrame for all scroll effects
let ticking = false;
let scrollY = 0;
let progressBar = null;

/**
 * Feature 1: Green Jacket Scroll Progress Indicator
 * Updates the left-edge progress bar based on scroll position
 */
function updateScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;

  document.body.style.setProperty('--scroll-progress', `${scrollPercent}%`);
  document.body.classList.toggle('scrolled', scrollY > 50);
}

/**
 * Feature 2: Reading Progress Bar (Top of page)
 * Creates and updates a golden progress bar at the top
 */
function createProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  document.body.prepend(progressBar);
  return progressBar;
}

function updateProgressBar(progressBar) {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollHeight > 0 ? scrollY / scrollHeight : 0;
  progressBar.style.transform = `scaleX(${scrollPercent})`;
}

/**
 * Feature 3: Rolling Hills Parallax Effect
 * Creates subtle depth by moving sidebar and content at different speeds
 * Desktop only for performance
 */
function updateParallax() {
  if (window.innerWidth > 900) {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    if (sidebar && content) {
      // Subtle parallax - sidebar moves down slowly, content moves up slightly
      sidebar.style.transform = `translateY(${scrollY * 0.15}px)`;
      content.style.transform = `translateY(${scrollY * -0.05}px)`;
    }
  }
}

/**
 * Optimized scroll handler using requestAnimationFrame
 * Prevents layout thrashing and ensures smooth 60fps
 */
function handleScroll() {
  scrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollProgress();
      updateProgressBar(progressBar);
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
}

/**
 * Handle window resize for parallax disable/enable
 */
function handleResize() {
  if (window.innerWidth <= 900) {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    if (sidebar && content) {
      sidebar.style.transform = 'none';
      content.style.transform = 'none';
    }
  }
}

/**
 * Update scorecard stats dynamically
 * Note: Jekyll templates handle the actual calculations.
 * This function is preserved for potential future enhancements.
 */
function updateScorecardStats() {
  // Scorecard values are calculated by Jekyll templates
  // No dynamic updates needed at this time
}

/**
 * Initialize all interactive features
 */
function init() {
  // Create progress bar element
  progressBar = createProgressBar();

  // Update scorecard with dynamic stats
  updateScorecardStats();

  // Set up event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });

  // Initial calculations
  handleScroll();
  handleResize();
}

/**
 * Respect user's motion preferences
 * Disable animations if user has reduced motion enabled
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Reduced motion - only essential functionality
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    document.body.style.setProperty('--scroll-progress', `${scrollPercent}%`);
  }, { passive: true });
} else {
  // Full experience with animations
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

