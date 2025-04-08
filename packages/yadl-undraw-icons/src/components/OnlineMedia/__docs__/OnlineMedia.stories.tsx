import type { Meta, StoryObj } from "@storybook/react";
import OnlineMedia from "../OnlineMedia";

const meta: Meta<typeof OnlineMedia> = { title: "unDraw/OnlineMedia", component: OnlineMedia };

export default meta;
type Story = StoryObj<typeof OnlineMedia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
