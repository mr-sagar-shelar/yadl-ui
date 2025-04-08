import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import S3onOutposts from "../S3onOutposts";

describe("S3onOutposts component", () => {
  it("S3onOutposts should render correctly", () => {
    render(<S3onOutposts />);
    expect(true).toBeTruthy();
  });
});
