import type { Meta, StoryObj } from "@storybook/react";
import StreetFood from "../StreetFood";

const meta: Meta<typeof StreetFood> = { title: "unDraw/StreetFood", component: StreetFood };

export default meta;
type Story = StoryObj<typeof StreetFood>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
