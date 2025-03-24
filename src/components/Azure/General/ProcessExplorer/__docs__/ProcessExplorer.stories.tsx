import type { Meta, StoryObj } from "@storybook/react";
import ProcessExplorer from "../ProcessExplorer";

const meta: Meta<typeof ProcessExplorer> = { title: "Azure/General/ProcessExplorer", component: ProcessExplorer };

export default meta;
type Story = StoryObj<typeof ProcessExplorer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
