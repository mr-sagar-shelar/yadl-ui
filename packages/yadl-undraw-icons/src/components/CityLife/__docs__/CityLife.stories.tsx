import type { Meta, StoryObj } from "@storybook/react";
import CityLife from "../CityLife";

const meta: Meta<typeof CityLife> = { title: "unDraw/CityLife", component: CityLife };

export default meta;
type Story = StoryObj<typeof CityLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
