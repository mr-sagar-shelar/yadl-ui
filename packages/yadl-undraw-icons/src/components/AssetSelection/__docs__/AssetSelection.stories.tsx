import type { Meta, StoryObj } from "@storybook/react";
import AssetSelection from "../AssetSelection";

const meta: Meta<typeof AssetSelection> = { title: "unDraw/AssetSelection", component: AssetSelection };

export default meta;
type Story = StoryObj<typeof AssetSelection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
