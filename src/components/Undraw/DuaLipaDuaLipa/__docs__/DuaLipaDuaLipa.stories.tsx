import type { Meta, StoryObj } from "@storybook/react";
import DuaLipaDuaLipa from "../DuaLipaDuaLipa";

const meta: Meta<typeof DuaLipaDuaLipa> = { title: "unDraw/DuaLipaDuaLipa", component: DuaLipaDuaLipa };

export default meta;
type Story = StoryObj<typeof DuaLipaDuaLipa>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
