import type { Meta, StoryObj } from "@storybook/react";
import QuittingTime from "../QuittingTime";

const meta: Meta<typeof QuittingTime> = { title: "unDraw/QuittingTime", component: QuittingTime };

export default meta;
type Story = StoryObj<typeof QuittingTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
