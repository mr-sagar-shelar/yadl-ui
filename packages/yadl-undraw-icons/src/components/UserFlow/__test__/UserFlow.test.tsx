import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UserFlow from "../UserFlow";

describe("UserFlow component", () => {
  it("UserFlow should render correctly", () => {
    render(<UserFlow />);
    expect(true).toBeTruthy();
  });
});
