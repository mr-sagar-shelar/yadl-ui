import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityOn from "../SecurityOn";

describe("SecurityOn component", () => {
  it("SecurityOn should render correctly", () => {
    render(<SecurityOn />);
    expect(true).toBeTruthy();
  });
});
