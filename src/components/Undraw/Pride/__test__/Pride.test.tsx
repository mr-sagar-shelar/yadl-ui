import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pride from "../Pride";

describe("Pride component", () => {
  it("Pride should render correctly", () => {
    render(<Pride />);
    expect(true).toBeTruthy();
  });
});
