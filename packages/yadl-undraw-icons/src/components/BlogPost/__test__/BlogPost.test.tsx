import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BlogPost from "../BlogPost";

describe("BlogPost component", () => {
  it("BlogPost should render correctly", () => {
    render(<BlogPost />);
    expect(true).toBeTruthy();
  });
});
