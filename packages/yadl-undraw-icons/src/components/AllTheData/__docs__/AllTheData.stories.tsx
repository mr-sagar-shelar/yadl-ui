import type { Meta, StoryObj } from "@storybook/react";
import AllTheData from "../AllTheData";

const meta: Meta<typeof AllTheData> = { title: "unDraw/AllTheData", component: AllTheData };

export default meta;
type Story = StoryObj<typeof AllTheData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
