import type { Meta, StoryObj } from "@storybook/react";
import DesignerLife from "../DesignerLife";

const meta: Meta<typeof DesignerLife> = { title: "unDraw/DesignerLife", component: DesignerLife };

export default meta;
type Story = StoryObj<typeof DesignerLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
