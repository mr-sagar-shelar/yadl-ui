import type { Meta, StoryObj } from "@storybook/react";
import Picture from "../Picture";

const meta: Meta<typeof Picture> = { title: "unDraw/Picture", component: Picture };

export default meta;
type Story = StoryObj<typeof Picture>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
