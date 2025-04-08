import type { Meta, StoryObj } from "@storybook/react";
import OnlineCv from "../OnlineCv";

const meta: Meta<typeof OnlineCv> = { title: "unDraw/OnlineCv", component: OnlineCv };

export default meta;
type Story = StoryObj<typeof OnlineCv>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
