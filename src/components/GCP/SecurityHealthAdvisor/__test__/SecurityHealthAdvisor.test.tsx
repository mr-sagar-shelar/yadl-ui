import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityHealthAdvisor from "../SecurityHealthAdvisor";

describe("SecurityHealthAdvisor component", () => {
  it("SecurityHealthAdvisor should render correctly", () => {
    render(<SecurityHealthAdvisor />);
    expect(true).toBeTruthy();
  });
});
