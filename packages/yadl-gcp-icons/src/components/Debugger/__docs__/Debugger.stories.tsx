import type { Meta, StoryObj } from "@storybook/react";
import Debugger from "../Debugger";

const meta: Meta<typeof Debugger> = { title: "GCP/Debugger", component: Debugger };

export default meta;
type Story = StoryObj<typeof Debugger>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
