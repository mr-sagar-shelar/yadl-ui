import type { Meta, StoryObj } from "@storybook/react";
import LoadMore from "../LoadMore";

const meta: Meta<typeof LoadMore> = { title: "unDraw/LoadMore", component: LoadMore };

export default meta;
type Story = StoryObj<typeof LoadMore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
