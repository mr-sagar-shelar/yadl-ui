import type { Meta, StoryObj } from "@storybook/react";
import Winter_magicWinterMagic from "../Winter_magicWinterMagic";

const meta: Meta<typeof Winter_magicWinterMagic> = { title: "unDraw/Winter_magicWinterMagic", component: Winter_magicWinterMagic };

export default meta;
type Story = StoryObj<typeof Winter_magicWinterMagic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
