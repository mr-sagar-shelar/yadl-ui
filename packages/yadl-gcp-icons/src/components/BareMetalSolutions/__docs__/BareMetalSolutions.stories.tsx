import type { Meta, StoryObj } from "@storybook/react";
import BareMetalSolutions from "../BareMetalSolutions";

const meta: Meta<typeof BareMetalSolutions> = { title: "GCP/BareMetalSolutions", component: BareMetalSolutions };

export default meta;
type Story = StoryObj<typeof BareMetalSolutions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
