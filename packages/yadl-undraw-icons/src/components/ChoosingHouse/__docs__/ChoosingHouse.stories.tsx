import type { Meta, StoryObj } from "@storybook/react";
import ChoosingHouse from "../ChoosingHouse";

const meta: Meta<typeof ChoosingHouse> = { title: "unDraw/ChoosingHouse", component: ChoosingHouse };

export default meta;
type Story = StoryObj<typeof ChoosingHouse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
