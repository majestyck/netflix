import { render } from "@testing-library/react";
import SearchBar from "src/components/SearchBar/SearchBar";

describe("SearchBar component testing", () => {
    it("should render correctly", () => {
        render(<SearchBar/>);
    });
});
