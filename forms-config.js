/* PUBLIC configuration only. Never put passwords or private API keys here.
   Create a form in your own Formspree account, then paste its endpoint below.
   One endpoint collects all four forms; each submission includes its audience.
   Optional overrides let you route individual pages to separate forms. */
window.CW_FORMS = Object.freeze({
  endpoint: "",
  overrides: Object.freeze({
    entrepreneurs: "",
    churches: "",
    investors: "",
    questions: ""
  })
});
