import type { Meta, StoryObj } from "@storybook/react";
import ToolsandSDKs from "../ToolsandSDKs";

const meta: Meta<typeof ToolsandSDKs> = { title: "AWS/DeveloperTools/ToolsandSDKs", component: ToolsandSDKs };

export default meta;
type Story = StoryObj<typeof ToolsandSDKs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
