import type { Meta, StoryObj } from "@storybook/react";
import Gaming from "../Gaming";

const meta: Meta<typeof Gaming> = { title: "unDraw/Gaming", component: Gaming };

export default meta;
type Story = StoryObj<typeof Gaming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
