const data = [
	{
		id: 0,
		title: 'Closures',
		summary: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\'s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
		goodToKnow: 'A closure gives you access to an outer function\'s scope from an inner function.',
		tags: ['JavaScript']
	},
	{
		id: 1,
		title: 'Hoisting',
		summary: 'Hoisting is a term you will not find used in any normative specification prose prior to ECMAScript® 2015 Language Specification. Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting',
		goodToKnow: '',
		tags: ['JavaScript','ES6']
	},
	{
		id: 2,
		title: 'Cookies',
		summary: 'An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data stored on the user\'s computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user\'s browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past). They can also be used to remember pieces of information that the user previously entered into form fields, such as names, addresses, passwords, and payment card numbers.',
		source: 'Wikipedia',
		sourceUrl: 'https://en.wikipedia.org/wiki/HTTP_cookie',
		goodToKnow: 'Cookies are sent throguh every request so <strong>be careful.</strong>',
		tags: ['HTTP']
	},
	{
		id: 3,
		title: 'localStorage',
		summary: 'The read-only localStorage property allows you to access a Storage object for the Document\'s origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed. (Data in a localStorage object created in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
		goodToKnow: 'Data stored in localStorage has no expiration time.',
		tags: ['JavaScript','General']
	},
	{
		id: 4,
		title: 'sessionStorage',
		summary: 'The sessionStorage property accesses a session Storage object for the current origin. sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn\'t expire, data in sessionStorage is cleared when the page session ends.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage',
		goodToKnow: 'Data in sessionStorage is cleared when the page session ends.',
		tags: ['JavaScript','General']
	},
	{
		id: 5,
		title: 'Block (Scope)',
		summary: 'A block statement (or compound statement in other languages) is used to group zero or more statements. It\'s delimited by a pair of curly braces and generally related to <em>for</em> and <em>if... else</em> statements.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block',
		goodToKnow: '<em>let</em> and <em>const</em> both have a <strong>block scope</strong>, whie <em>var</em> has a funcional scope.',
		tags: ['JavaScript','General']
	},
	{
		id: 6,
		title: 'debounce()',
		summary: 'The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.',
		source: 'Educative.io',
		sourceUrl: 'https://www.educative.io/edpresso/how-to-use-the-debounce-function-in-javascript',
		goodToKnow: 'Iterative processes (scrolling, resizing...) can slow down a web page/app. Using <em>debounce()</em> avoids this by waiting before running again.',
		tags: ['JavaScript']
	},
	{
		id: 7,
		title: 'async/await',
		summary: 'An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
		goodToKnow: '',
		tags: ['JavaScript']
	},
	{
		id: 8,
		title: 'Promises',
		summary: 'The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
		goodToKnow: '',
		tags: ['JavaScript']
	},
	{
		id: 9,
		title: 'map()',
		summary: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
		goodToKnow: '',
		tags: ['JavaScript', 'ES5']
	},
	{
		id: 10,
		title: 'filter()',
		summary: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
		goodToKnow: '',
		tags: ['JavaScript', 'ES5']
	},
	{
		id: 11,
		title: 'reduce()',
		summary: 'The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.',
		source: 'MDN web docs',
		sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
		goodToKnow: '',
		tags: ['JavaScript', 'ES5']
	},
	{
		id: 12,
		title: 'Tagged templates'
	},
	{
		id: 13,
		title: 'CSS Modules',
		goodToKnow: 'Allow the use of CSS classes as JS modules to use inside a component'
	},
	{
		id: 14,
		title: 'Styled components'
	},
	{
		id: 15,
		title: 'Two-way binding'
	},
]

export default data