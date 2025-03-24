import type { Meta, StoryObj } from "@storybook/react";
import Opinion from "../Opinion";

const meta: Meta<typeof Opinion> = { title: "unDraw/Opinion", component: Opinion };

export default meta;
type Story = StoryObj<typeof Opinion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
