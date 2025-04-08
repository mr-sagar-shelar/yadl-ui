import type { Meta, StoryObj } from "@storybook/react";
import MintTeaMintTea from "../MintTeaMintTea";

const meta: Meta<typeof MintTeaMintTea> = { title: "unDraw/MintTeaMintTea", component: MintTeaMintTea };

export default meta;
type Story = StoryObj<typeof MintTeaMintTea>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
