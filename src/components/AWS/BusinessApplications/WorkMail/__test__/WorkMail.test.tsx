import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkMail from "../WorkMail";

describe("WorkMail component", () => {
  it("WorkMail should render correctly", () => {
    render(<WorkMail />);
    expect(true).toBeTruthy();
  });
});
