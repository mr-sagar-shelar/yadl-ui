import type { Meta, StoryObj } from "@storybook/react";
import OrdinaryDay from "../OrdinaryDay";

const meta: Meta<typeof OrdinaryDay> = { title: "unDraw/OrdinaryDay", component: OrdinaryDay };

export default meta;
type Story = StoryObj<typeof OrdinaryDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
