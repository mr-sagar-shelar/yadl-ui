import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kafka from "../Kafka";

describe("Kafka component", () => {
  it("Kafka should render correctly", () => {
    render(<Kafka />);
    expect(true).toBeTruthy();
  });
});
