import type { Meta, StoryObj } from "@storybook/react";
import Xmas_snowmanXmasSnowman from "../Xmas_snowmanXmasSnowman";

const meta: Meta<typeof Xmas_snowmanXmasSnowman> = { title: "unDraw/Xmas_snowmanXmasSnowman", component: Xmas_snowmanXmasSnowman };

export default meta;
type Story = StoryObj<typeof Xmas_snowmanXmasSnowman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
