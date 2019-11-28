import { extractUsernameFromUrl } from "@/config/filters";
import { expect } from "chai";

describe("extractUsernameFromUrl", () => {
    it("returns the username from a github url", () => {
        const actual = extractUsernameFromUrl("https://github.com/johndoe");
        const expected = "johndoe";
        expect(actual).to.be.equal(expected);
    });

    it("returns the username from a linkedin url", () => {
        const actual = extractUsernameFromUrl(
            "https://www.linkedin.com/in/johndoe"
        );
        const expected = "johndoe";
        expect(actual).to.be.equal(expected);
    });

    it("returns the username from a twitter url", () => {
        const actual = extractUsernameFromUrl("https://twitter.com/johndoe");
        const expected = "johndoe";
        expect(actual).to.be.equal(expected);
    });

    it("returns the username from the personal page", () => {
        const actual = extractUsernameFromUrl("https://johndoe.com");
        const expected = "johndoe.com";
        expect(actual).to.be.equal(expected);
    });

    it("returns the username without query string", () => {
        const actual = extractUsernameFromUrl("https://johndoe.com?foo=bar");
        const expected = "johndoe.com";
        expect(actual).to.be.equal(expected);
    });

    it("returns the username without query hash", () => {
        const actual = extractUsernameFromUrl("https://johndoe.com#section-1");
        const expected = "johndoe.com";
        expect(actual).to.be.equal(expected);
    });

    it("should trim the url", () => {
        const actual = extractUsernameFromUrl("   https://johndoe.com   ");
        const expected = "johndoe.com";
        expect(actual).to.be.equal(expected);
    });

    it("returns the same input if it is not a string", () => {
        const actual = extractUsernameFromUrl(123);
        const expected = 123;
        expect(actual).to.be.equal(expected);
    });

    it("returns an empty string if the input are just white space", () => {
        const actual = extractUsernameFromUrl(" ");
        const expected = "";
        expect(actual).to.be.equal(expected);
    });

    it("returns the username wihtout trailing slashes", () => {
        const actual = extractUsernameFromUrl("https://twitter.com/johndoe/");
        const expected = "johndoe";
        expect(actual).to.be.equal(expected);
    });
});
