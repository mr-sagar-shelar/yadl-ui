import type { Meta, StoryObj } from "@storybook/react";
import CloudSync from "../CloudSync";

const meta: Meta<typeof CloudSync> = { title: "unDraw/CloudSync", component: CloudSync };

export default meta;
type Story = StoryObj<typeof CloudSync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
