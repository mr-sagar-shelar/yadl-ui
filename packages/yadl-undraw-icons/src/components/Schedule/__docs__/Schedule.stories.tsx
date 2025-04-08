import type { Meta, StoryObj } from "@storybook/react";
import Schedule from "../Schedule";

const meta: Meta<typeof Schedule> = { title: "unDraw/Schedule", component: Schedule };

export default meta;
type Story = StoryObj<typeof Schedule>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
