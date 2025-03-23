import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessChat from "../BusinessChat";

describe("BusinessChat component", () => {
  it("BusinessChat should render correctly", () => {
    render(<BusinessChat />);
    expect(true).toBeTruthy();
  });
});
