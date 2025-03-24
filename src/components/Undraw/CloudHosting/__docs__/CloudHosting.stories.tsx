import type { Meta, StoryObj } from "@storybook/react";
import CloudHosting from "../CloudHosting";

const meta: Meta<typeof CloudHosting> = { title: "unDraw/CloudHosting", component: CloudHosting };

export default meta;
type Story = StoryObj<typeof CloudHosting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
