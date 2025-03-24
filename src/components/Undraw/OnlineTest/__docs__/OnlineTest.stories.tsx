import type { Meta, StoryObj } from "@storybook/react";
import OnlineTest from "../OnlineTest";

const meta: Meta<typeof OnlineTest> = { title: "unDraw/OnlineTest", component: OnlineTest };

export default meta;
type Story = StoryObj<typeof OnlineTest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
