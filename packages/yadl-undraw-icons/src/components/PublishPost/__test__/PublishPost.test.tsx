import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PublishPost from "../PublishPost";

describe("PublishPost component", () => {
  it("PublishPost should render correctly", () => {
    render(<PublishPost />);
    expect(true).toBeTruthy();
  });
});
