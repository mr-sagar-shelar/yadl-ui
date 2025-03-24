import type { Meta, StoryObj } from "@storybook/react";
import PizzaSharingPizzaSharing from "../PizzaSharingPizzaSharing";

const meta: Meta<typeof PizzaSharingPizzaSharing> = { title: "unDraw/PizzaSharingPizzaSharing", component: PizzaSharingPizzaSharing };

export default meta;
type Story = StoryObj<typeof PizzaSharingPizzaSharing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
