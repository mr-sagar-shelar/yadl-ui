import type { Meta, StoryObj } from "@storybook/react";
import OnlineReading from "../OnlineReading";

const meta: Meta<typeof OnlineReading> = { title: "unDraw/OnlineReading", component: OnlineReading };

export default meta;
type Story = StoryObj<typeof OnlineReading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
