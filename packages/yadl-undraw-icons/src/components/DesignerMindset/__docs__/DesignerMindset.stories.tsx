import type { Meta, StoryObj } from "@storybook/react";
import DesignerMindset from "../DesignerMindset";

const meta: Meta<typeof DesignerMindset> = { title: "unDraw/DesignerMindset", component: DesignerMindset };

export default meta;
type Story = StoryObj<typeof DesignerMindset>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
