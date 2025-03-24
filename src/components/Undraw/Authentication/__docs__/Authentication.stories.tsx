import type { Meta, StoryObj } from "@storybook/react";
import Authentication from "../Authentication";

const meta: Meta<typeof Authentication> = { title: "unDraw/Authentication", component: Authentication };

export default meta;
type Story = StoryObj<typeof Authentication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
