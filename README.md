# Advance Profile Card - Stage 1 Submission

A multi-page, semantic, accessible, and responsive web application built with vanilla HTML, CSS, and JavaScript. This project extends Stage 0 by adding a Contact Us form and an About Me page.

## Live Demo

[View Live Demo](https://hngi13-profile-card.vercel.app/)

## Project Structure

```javascript
hngi13-profile-card/
├── index.html          # Profile card page (Stage 0)
├── contact.html        # Contact form page (Stage 1)
├── about.html          # About me page (Stage 1)
├── styles.css         # Shared CSS styles
├── script.js          # Shared JavaScript functionality
└── README.md         # Project documentation
```

## New in Stage 1

### Contact Us Page

- **Full form validation** with real-time feedback
- **Accessible error messages** linked to form fields
- **Success message** on valid submission
- **All required fields** with proper validation:
  - Full name (required)
  - Email (valid format required)
  - Subject (required)
  - Message (minimum 10 characters)
- **Keyboard accessible** with proper focus management

### About Me Page

- **Personal bio** and background
- **Program goals** and aspirations
- **Areas for improvement** with honest self-reflection
- **Note to future self** for motivation
- **Extra thoughts** on collaboration, imposter syndrome, and balance
- **Semantic structure** with proper sections and headings

## Stage 1 Requirements Met

### Contact Page (`contact.html`)

- [x] Full name input (`test-contact-name`)
- [x] Email input (`test-contact-email`)
- [x] Subject input (`test-contact-subject`)
- [x] Message textarea (`test-contact-message`)
- [x] Submit button (`test-contact-submit`)
- [x] Error messages for each field (`test-contact-error-*`)
- [x] Success message (`test-contact-success`)
- [x] All fields required with proper validation
- [x] Email validation (<name@example.com> format)
- [x] Message minimum 10 characters
- [x] Labels linked to inputs with `for` attribute
- [x] Error messages linked with `aria-describedby`
- [x] Fully keyboard accessible

### About Page (`about.html`)

- [x] Main wrapper (`test-about-page`)
- [x] Bio section (`test-about-bio`)
- [x] Goals section (`test-about-goals`)
- [x] Areas of low confidence (`test-about-confidence`)
- [x] Note to future self (`test-about-future-note`)
- [x] Extra thoughts (`test-about-extra`)
- [x] Semantic HTML structure (main, section, h2, p, ul)
- [x] Proper heading hierarchy

### General Requirements

- [x] Consistent black and white theme across all pages
- [x] Navigation between all three pages
- [x] Semantic HTML throughout
- [x] Fully accessible (WCAG 2.1 AA)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Keyboard navigable
- [x] All required `data-testid` attributes

## Design Theme

### Black & White Brutalist Design

- Clean, minimal aesthetic with strong contrast
- Hard edges and bold shadows for depth
- System fonts for fast loading
- Consistent spacing and typography
- Professional and modern appearance

## Local Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone the repository:

```bash
git clone https://github.com/codabytez/hngi13-profile-card.git
cd hngi13-profile-card
```

1. Open the project:

```bash
# Simply open index.html in your browser
# Or use a local server like Live Server extension in VSCode
```

1. Visit `http://localhost:8000` in your browser (if using a local server).

## Automated Testing

All elements include the required `data-testid` attributes:

```javascript
// Contact page tests
document.querySelector('[data-testid="test-contact-name"]');
document.querySelector('[data-testid="test-contact-email"]');
document.querySelector('[data-testid="test-contact-subject"]');
document.querySelector('[data-testid="test-contact-message"]');
document.querySelector('[data-testid="test-contact-submit"]');
document.querySelector('[data-testid="test-contact-error-name"]');
document.querySelector('[data-testid="test-contact-success"]');

// About page tests
document.querySelector('[data-testid="test-about-page"]');
document.querySelector('[data-testid="test-about-bio"]');
document.querySelector('[data-testid="test-about-goals"]');
document.querySelector('[data-testid="test-about-confidence"]');
document.querySelector('[data-testid="test-about-future-note"]');
document.querySelector('[data-testid="test-about-extra"]');
```

### Manual Testing Checklist

#### Contact Page

- [x] All form fields are present and labeled
- [x] Name field shows error when empty
- [x] Email field validates format (<user@example.com>)
- [x] Subject field shows error when empty
- [x] Message field requires 10+ characters
- [x] Errors appear on blur/submit
- [x] Success message shows only after valid submission
- [x] Form resets after successful submission
- [x] Tab navigation works through all fields
- [x] Enter/Space keys work on submit button

#### About Page

- [x] All required sections are present
- [x] Content is readable and well-structured
- [x] Semantic HTML used throughout
- [x] Proper heading hierarchy (h1, h2, h3)
- [x] Responsive layout on all screen sizes

#### Navigation

- [x] Navigation works on all pages
- [x] Active page is visually indicated
- [x] Keyboard navigation works (Tab, Enter)
- [x] Links have proper focus states

## Responsive Breakpoints

- **Mobile**: < 480px
  - Vertical navigation
  - Single column layout
  - Adjusted typography
  - Smaller shadows
- **Tablet**: 480px - 767px
  - Horizontal navigation (wrapped)
  - Mixed layout approaches
  - Medium shadows
- **Desktop**: ≥ 768px
  - Full horizontal navigation
  - Grid/flexbox layouts
  - Full shadow effects

## Accessibility Features

### Semantic HTML

- Proper document structure with landmarks
- `<main>`, `<nav>`, `<article>`, `<section>` elements
- Proper heading hierarchy
- Lists for navigation and grouped content

### Form Accessibility

- All inputs have associated `<label>` elements
- Error messages linked with `aria-describedby`
- `role="alert"` on error messages
- Required fields marked with `required` attribute
- Clear focus indicators

### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order
- Visible focus states
- Enter/Space key support where appropriate

### Visual Accessibility

- High contrast (black and white theme)
- Readable font sizes (minimum 16px)
- Clear visual hierarchy
- No color-only indicators

## Form Validation Details

### Validation Rules

- **Name**: Cannot be empty
- **Email**: Must match pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Subject**: Cannot be empty
- **Message**: Minimum 10 characters

### Validation Triggers

- **On Blur**: Each field validates when user leaves the field
- **On Input**: Error clears as user types after an error
- **On Submit**: All fields validate before submission

### User Feedback

- **Error Messages**: Show below invalid fields with clear instructions
- **Success Message**: Displays after valid submission, auto-hides after 5s
- **Focus Management**: Automatically focuses first invalid field
- **Visual Indicators**: Fields with errors get additional styling

## 🔗 Links

- [Live Demo](https://hngi13-profile-card.vercel.app/)
- [GitHub Repository](https://github.com/codabytez/hngi13-profile-card)

## Author

### Lisan al-Gaib

- GitHub: [@codabytez](https://github.com/codabytez)
- Twitter: [@codabytez](https://twitter.com/codabytez)
- LinkedIn: [Obinna Chidi](https://linkedin.com/in/codabytez)

## Acknowledgments

- Built for Stage 1 submission of the HNGi13 Frontend Internship
- Inspired by brutalist web design principles

## Resources Used

- [MDN Web Docs - Semantic HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [W3C - Accessible Forms](https://www.w3.org/WAI/tutorials/forms/)
- [CSS-Tricks - Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

---

## Known Issues

None at this time. If you find any issues, please report them in the GitHub repository.

## Future Enhancements (Post-Submission Ideas)

- Add animation transitions between pages
- Implement dark mode toggle
- Add form data persistence with localStorage (or alternative)
- Implement smooth scroll navigation
