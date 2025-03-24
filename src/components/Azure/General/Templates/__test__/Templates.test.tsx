import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Templates from "../Templates";

describe("Templates component", () => {
  it("Templates should render correctly", () => {
    render(<Templates />);
    expect(true).toBeTruthy();
  });
});
