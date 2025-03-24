import type { Meta, StoryObj } from "@storybook/react";
import FastLoading from "../FastLoading";

const meta: Meta<typeof FastLoading> = { title: "unDraw/FastLoading", component: FastLoading };

export default meta;
type Story = StoryObj<typeof FastLoading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
