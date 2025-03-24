import type { Meta, StoryObj } from "@storybook/react";
import Baby from "../Baby";

const meta: Meta<typeof Baby> = { title: "unDraw/Baby", component: Baby };

export default meta;
type Story = StoryObj<typeof Baby>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
