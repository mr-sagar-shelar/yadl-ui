import type { Meta, StoryObj } from "@storybook/react";
import Science from "../Science";

const meta: Meta<typeof Science> = { title: "unDraw/Science", component: Science };

export default meta;
type Story = StoryObj<typeof Science>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
