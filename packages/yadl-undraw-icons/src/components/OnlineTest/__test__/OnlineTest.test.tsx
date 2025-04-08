import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineTest from "../OnlineTest";

describe("OnlineTest component", () => {
  it("OnlineTest should render correctly", () => {
    render(<OnlineTest />);
    expect(true).toBeTruthy();
  });
});
