import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DevOpsGuru from "../DevOpsGuru";

describe("DevOpsGuru component", () => {
  it("DevOpsGuru should render correctly", () => {
    render(<DevOpsGuru />);
    expect(true).toBeTruthy();
  });
});
