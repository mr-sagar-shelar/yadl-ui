import type { Meta, StoryObj } from "@storybook/react";
import DesignerGirl from "../DesignerGirl";

const meta: Meta<typeof DesignerGirl> = { title: "unDraw/DesignerGirl", component: DesignerGirl };

export default meta;
type Story = StoryObj<typeof DesignerGirl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
