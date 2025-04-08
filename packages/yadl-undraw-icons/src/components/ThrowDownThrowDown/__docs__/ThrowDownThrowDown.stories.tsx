import type { Meta, StoryObj } from "@storybook/react";
import ThrowDownThrowDown from "../ThrowDownThrowDown";

const meta: Meta<typeof ThrowDownThrowDown> = { title: "unDraw/ThrowDownThrowDown", component: ThrowDownThrowDown };

export default meta;
type Story = StoryObj<typeof ThrowDownThrowDown>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
