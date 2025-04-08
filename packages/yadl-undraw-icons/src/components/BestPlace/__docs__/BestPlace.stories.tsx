import type { Meta, StoryObj } from "@storybook/react";
import BestPlace from "../BestPlace";

const meta: Meta<typeof BestPlace> = { title: "unDraw/BestPlace", component: BestPlace };

export default meta;
type Story = StoryObj<typeof BestPlace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
