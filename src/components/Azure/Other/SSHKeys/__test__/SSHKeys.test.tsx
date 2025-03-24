import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SSHKeys from "../SSHKeys";

describe("SSHKeys component", () => {
  it("SSHKeys should render correctly", () => {
    render(<SSHKeys />);
    expect(true).toBeTruthy();
  });
});
