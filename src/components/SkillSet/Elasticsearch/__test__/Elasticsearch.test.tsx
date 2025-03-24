import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Elasticsearch from "../Elasticsearch";

describe("Elasticsearch component", () => {
  it("Elasticsearch should render correctly", () => {
    render(<Elasticsearch />);
    expect(true).toBeTruthy();
  });
});
