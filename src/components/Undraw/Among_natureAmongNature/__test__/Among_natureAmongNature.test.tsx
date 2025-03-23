import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Among_natureAmongNature from "../Among_natureAmongNature";

describe("Among_natureAmongNature component", () => {
  it("Among_natureAmongNature should render correctly", () => {
    render(<Among_natureAmongNature />);
    expect(true).toBeTruthy();
  });
});
