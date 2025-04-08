import type { Meta, StoryObj } from "@storybook/react";
import HappyWomenDayHappyWomenDay from "../HappyWomenDayHappyWomenDay";

const meta: Meta<typeof HappyWomenDayHappyWomenDay> = { title: "unDraw/HappyWomenDayHappyWomenDay", component: HappyWomenDayHappyWomenDay };

export default meta;
type Story = StoryObj<typeof HappyWomenDayHappyWomenDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
