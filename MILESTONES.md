# ClassHub — Milestone Explanations

## M1 — Frontend Prototype

### Question: What state lives in the store and what stays inside a component? Why?

In store :  the list of classes, loading status, and API errors. beacuse this allows different pages, such as the homepage and Explore Classes page, to access the same data without duplicating it.

inside componant :   form inputs, validation errors, and submission status locally because these values are only used by the Create new Class form.