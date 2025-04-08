import type { Meta, StoryObj } from "@storybook/react";
import News from "../News";

const meta: Meta<typeof News> = { title: "unDraw/News", component: News };

export default meta;
type Story = StoryObj<typeof News>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
