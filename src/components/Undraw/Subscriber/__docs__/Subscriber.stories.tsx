import type { Meta, StoryObj } from "@storybook/react";
import Subscriber from "../Subscriber";

const meta: Meta<typeof Subscriber> = { title: "unDraw/Subscriber", component: Subscriber };

export default meta;
type Story = StoryObj<typeof Subscriber>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
