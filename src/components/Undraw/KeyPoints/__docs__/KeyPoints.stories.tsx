import type { Meta, StoryObj } from "@storybook/react";
import KeyPoints from "../KeyPoints";

const meta: Meta<typeof KeyPoints> = { title: "unDraw/KeyPoints", component: KeyPoints };

export default meta;
type Story = StoryObj<typeof KeyPoints>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
