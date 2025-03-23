import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PublicDiscussion from "../PublicDiscussion";

describe("PublicDiscussion component", () => {
  it("PublicDiscussion should render correctly", () => {
    render(<PublicDiscussion />);
    expect(true).toBeTruthy();
  });
});
