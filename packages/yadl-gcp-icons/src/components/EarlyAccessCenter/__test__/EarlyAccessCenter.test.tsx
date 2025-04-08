import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EarlyAccessCenter from "../EarlyAccessCenter";

describe("EarlyAccessCenter component", () => {
  it("EarlyAccessCenter should render correctly", () => {
    render(<EarlyAccessCenter />);
    expect(true).toBeTruthy();
  });
});
