import type { Meta, StoryObj } from "@storybook/react";
import Writer from "../Writer";

const meta: Meta<typeof Writer> = { title: "unDraw/Writer", component: Writer };

export default meta;
type Story = StoryObj<typeof Writer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
