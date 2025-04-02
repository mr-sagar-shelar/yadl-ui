import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ansible from "../Ansible";

describe("Ansible component", () => {
  it("Ansible should render correctly", () => {
    render(<Ansible />);
    expect(true).toBeTruthy();
  });
});
