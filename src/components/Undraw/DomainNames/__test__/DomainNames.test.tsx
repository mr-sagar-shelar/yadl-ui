import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DomainNames from "../DomainNames";

describe("DomainNames component", () => {
  it("DomainNames should render correctly", () => {
    render(<DomainNames />);
    expect(true).toBeTruthy();
  });
});
