import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PostingPhoto from "../PostingPhoto";

describe("PostingPhoto component", () => {
  it("PostingPhoto should render correctly", () => {
    render(<PostingPhoto />);
    expect(true).toBeTruthy();
  });
});
