import type { Meta, StoryObj } from "@storybook/react";
import CabinCabin from "../CabinCabin";

const meta: Meta<typeof CabinCabin> = { title: "unDraw/CabinCabin", component: CabinCabin };

export default meta;
type Story = StoryObj<typeof CabinCabin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
