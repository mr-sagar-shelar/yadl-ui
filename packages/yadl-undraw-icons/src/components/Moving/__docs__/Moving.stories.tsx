import type { Meta, StoryObj } from "@storybook/react";
import Moving from "../Moving";

const meta: Meta<typeof Moving> = { title: "unDraw/Moving", component: Moving };

export default meta;
type Story = StoryObj<typeof Moving>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
