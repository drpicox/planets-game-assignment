import { getByText } from "@testing-library/dom";
import AbstractMatcher from "./AbstractMatcher";

export default class extends AbstractMatcher {
  constructor() {
    super(/click the _([^_]+)_ button/i);
  }

  async interpretMatch([, buttonText], _, { container }) {
    const button = getByText(container, buttonText);
    button.click();
  }
}
