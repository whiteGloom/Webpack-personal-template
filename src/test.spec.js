// Requirements
const jsdom = require("jsdom");

const {JSDOM} = jsdom;
const window = (new JSDOM("<body><div id='root'></div></body>", { runScripts: "outside-only" })).window;
global.window = window;
global.document = window.document;

// Specification
describe("Just a test", () => {
	it("Da da ya", () => {
		expect(123).toEqual(123);
	});
});