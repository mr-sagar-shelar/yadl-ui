import type { Meta, StoryObj } from "@storybook/react";
import Font from "../Font";

const meta: Meta<typeof Font> = { title: "unDraw/Font", component: Font };

export default meta;
type Story = StoryObj<typeof Font>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
