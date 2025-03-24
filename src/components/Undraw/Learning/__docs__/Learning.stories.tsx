import type { Meta, StoryObj } from "@storybook/react";
import Learning from "../Learning";

const meta: Meta<typeof Learning> = { title: "unDraw/Learning", component: Learning };

export default meta;
type Story = StoryObj<typeof Learning>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
