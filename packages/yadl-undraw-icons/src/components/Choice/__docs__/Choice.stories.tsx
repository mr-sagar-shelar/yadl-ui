import type { Meta, StoryObj } from "@storybook/react";
import Choice from "../Choice";

const meta: Meta<typeof Choice> = { title: "unDraw/Choice", component: Choice };

export default meta;
type Story = StoryObj<typeof Choice>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
