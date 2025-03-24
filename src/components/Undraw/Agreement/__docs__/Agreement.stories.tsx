import type { Meta, StoryObj } from "@storybook/react";
import Agreement from "../Agreement";

const meta: Meta<typeof Agreement> = { title: "unDraw/Agreement", component: Agreement };

export default meta;
type Story = StoryObj<typeof Agreement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
