import type { Meta, StoryObj } from "@storybook/react";
import CityDriver from "../CityDriver";

const meta: Meta<typeof CityDriver> = { title: "unDraw/CityDriver", component: CityDriver };

export default meta;
type Story = StoryObj<typeof CityDriver>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
