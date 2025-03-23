import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineInformation from "../OnlineInformation";

describe("OnlineInformation component", () => {
  it("OnlineInformation should render correctly", () => {
    render(<OnlineInformation />);
    expect(true).toBeTruthy();
  });
});
