import type { Meta, StoryObj } from "@storybook/react";
import OnlineWorld from "../OnlineWorld";

const meta: Meta<typeof OnlineWorld> = { title: "unDraw/OnlineWorld", component: OnlineWorld };

export default meta;
type Story = StoryObj<typeof OnlineWorld>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
