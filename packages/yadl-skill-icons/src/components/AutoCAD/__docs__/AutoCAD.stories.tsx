import type { Meta, StoryObj } from "@storybook/react";
import AutoCAD from "../AutoCAD";

const meta: Meta<typeof AutoCAD> = { title: "SkillIcon/AutoCAD", component: AutoCAD };

export default meta;
type Story = StoryObj<typeof AutoCAD>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
