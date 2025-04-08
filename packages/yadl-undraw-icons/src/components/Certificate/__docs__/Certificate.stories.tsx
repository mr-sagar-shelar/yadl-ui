import type { Meta, StoryObj } from "@storybook/react";
import Certificate from "../Certificate";

const meta: Meta<typeof Certificate> = { title: "unDraw/Certificate", component: Certificate };

export default meta;
type Story = StoryObj<typeof Certificate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
