import type { Meta, StoryObj } from "@storybook/react";
import Forms from "../Forms";

const meta: Meta<typeof Forms> = { title: "unDraw/Forms", component: Forms };

export default meta;
type Story = StoryObj<typeof Forms>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
