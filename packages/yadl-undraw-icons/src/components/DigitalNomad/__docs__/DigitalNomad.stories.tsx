import type { Meta, StoryObj } from "@storybook/react";
import DigitalNomad from "../DigitalNomad";

const meta: Meta<typeof DigitalNomad> = { title: "unDraw/DigitalNomad", component: DigitalNomad };

export default meta;
type Story = StoryObj<typeof DigitalNomad>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
