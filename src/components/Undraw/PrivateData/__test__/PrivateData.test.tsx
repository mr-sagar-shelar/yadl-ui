import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateData from "../PrivateData";

describe("PrivateData component", () => {
  it("PrivateData should render correctly", () => {
    render(<PrivateData />);
    expect(true).toBeTruthy();
  });
});
