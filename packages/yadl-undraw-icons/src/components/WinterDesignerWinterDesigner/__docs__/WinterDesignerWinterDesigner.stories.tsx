import type { Meta, StoryObj } from "@storybook/react";
import WinterDesignerWinterDesigner from "../WinterDesignerWinterDesigner";

const meta: Meta<typeof WinterDesignerWinterDesigner> = { title: "unDraw/WinterDesignerWinterDesigner", component: WinterDesignerWinterDesigner };

export default meta;
type Story = StoryObj<typeof WinterDesignerWinterDesigner>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
