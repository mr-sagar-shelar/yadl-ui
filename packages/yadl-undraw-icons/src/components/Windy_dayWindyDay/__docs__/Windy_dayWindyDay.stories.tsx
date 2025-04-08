import type { Meta, StoryObj } from "@storybook/react";
import Windy_dayWindyDay from "../Windy_dayWindyDay";

const meta: Meta<typeof Windy_dayWindyDay> = { title: "unDraw/Windy_dayWindyDay", component: Windy_dayWindyDay };

export default meta;
type Story = StoryObj<typeof Windy_dayWindyDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
