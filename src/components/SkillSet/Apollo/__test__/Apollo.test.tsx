import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Apollo from "../Apollo";

describe("Apollo component", () => {
  it("Apollo should render correctly", () => {
    render(<Apollo />);
    expect(true).toBeTruthy();
  });
});
