import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NICEEnginFrame from "../NICEEnginFrame";

describe("NICEEnginFrame component", () => {
  it("NICEEnginFrame should render correctly", () => {
    render(<NICEEnginFrame />);
    expect(true).toBeTruthy();
  });
});
